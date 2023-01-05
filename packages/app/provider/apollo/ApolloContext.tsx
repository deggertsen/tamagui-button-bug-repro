import {
  ApolloProvider,
  ApolloClient,
  from,
  InMemoryCache,
  ApolloLink,
  HttpLink,
  fromPromise,
  split,
} from '@apollo/client'
import { NetworkError } from '@apollo/client/errors'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { RetryLink } from '@apollo/client/link/retry'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { getMainDefinition } from '@apollo/client/utilities'
import { GRAPHQL_HTTP_URL, GRAPHQL_WS_URL } from 'app/config/env'
import { createClient } from 'graphql-ws'
import React, { useEffect, useMemo, useState } from 'react'

import sendErrorEvent from '../../helpers/ErrorEvents'
import { ReactNativeChildren } from '../../types'
// import { GameScreenActionWindow } from '../../play/game/types'
import { useAuthContext } from '../auth/AuthContext'
import { getCurrentUser, getFirebaseToken } from '../auth/firebaseAuthFunctions'
import Connecting from '../connecting/Connecting'

const httpUrl = GRAPHQL_HTTP_URL ?? 'http://api.aidungeon.io/graphql'
const wsUrl = GRAPHQL_WS_URL ?? 'ws://api.aidungeon.io/subscriptions'

function ApolloContext({
  children,
}: {
  children: ReactNativeChildren
}): JSX.Element {
  const {
    accessToken: token,
    authState,
    setAuthState,
    refreshFirebaseToken,
  } = useAuthContext()

  const [link, setLink] = useState<ApolloLink | null>(null)
  const [subscriptionClient, setSubscriptionClient] =
    useState<GraphQLWsLink | null>(null)
  const [initializing, setInitializing] = useState<boolean>(true)

  /* Initialize the cache and the apollo client */
  const client = useMemo(() => {
    const resolvers = {}
    const defaultOptions = { query: { partialRefetch: true } }

    const cache = new InMemoryCache({
      possibleTypes: {
        Votable: ['Adventure', 'Scenario', 'World', 'Comment'],
        Searchable: ['Adventure', 'Scenario', 'World'],
      },
      // typePolicies: {
      //   Adventure: {
      //     fields: {
      //       actionWindow: {
      //         merge(_, incoming: GameScreenActionWindow[]) {
      //           return incoming ?? []
      //         },
      //       },
      //     },
      //   },
      // },
    })
    return new ApolloClient({
      cache,
      resolvers,
      defaultOptions,
    })
  }, [])

  /* Update the link whenever the token changes */
  useEffect(() => {
    if (!token) return
    if (
      authState !== 'firebaseUser' &&
      authState !== 'refreshingRegistered' &&
      authState !== 'refreshingAnonymous'
    )
      return

    // Dispose of old subscription client before creating a new one.
    void subscriptionClient?.client?.dispose()
    // Create subscription client
    const wsLink = new GraphQLWsLink(
      createClient({
        url: wsUrl,
        lazyCloseTimeout: 25000,
        retryAttempts: 3,
        on: {
          opened: () => {},
          closed: () => {},
        },
        connectionParams: () => {
          return {
            token,
          }
        },
      })
    )
    setSubscriptionClient(wsLink)

    /* Create a link for http requests */
    const httpLink = new HttpLink({ uri: httpUrl })

    /* Handle apollo errors. For more info on handling errors see:
    https://deniapps.com/blog/finally-we-fixed-failed-to-fetch-error */
    const errorLink = onError(
      ({ operation, forward, graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          graphQLErrors.forEach(({ message, locations, path, extensions }) => {
            if (!message.includes('Session has expired'))
              void sendErrorEvent({
                message,
                extensions: { ...extensions },
                path: ['apollo_context', ...[path], operation.operationName],
                locations,
              })
          })
        }

        if (networkError) {
          void sendErrorEvent({
            message: networkError.message,
            extensions: { ...networkError },
            path: ['apollo_context', operation.operationName],
            locations: ['network_error'],
          })

          if (networkError.message.includes('Session has expired')) {
            fromPromise(
              refreshFirebaseToken(true).then((newToken) => {
                const oldHeaders = operation.getContext().headers as Record<
                  string,
                  string
                >
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `firebase ${newToken.firebaseToken}`,
                  },
                })
                return forward(operation)
              })
            )
          }
        }
      }
    )

    /* Create a link for authentication */
    const authLink = setContext(async (_, { headers }) => {
      // return the headers to the context so httpLink can read them
      const currentUser = getCurrentUser()
      if (currentUser) {
        const firebaseTokenResponse = await getFirebaseToken(currentUser)
        const { firebaseToken } = firebaseTokenResponse
        if (firebaseToken) {
          // console.log(
          //   'Setting dynamically retrieved token',
          //   `firebase ${firebaseToken}`
          // )
          return {
            headers: {
              ...(headers as Record<string, unknown>),
              authorization: `firebase ${firebaseToken}`,
            },
          }
        }
      }
      return {
        headers: {
          ...(headers as Record<string, unknown>),
          Authorization: token,
        },
      }
    })

    /* Create a link to split between websockets and http requests */
    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      wsLink,
      authLink.concat(httpLink)
    )

    /* Create a link for retries */
    const retryLink = new RetryLink({
      attempts: async (count, operation, error: NetworkError) => {
        if (!!error && error.message.includes('Session has expired')) {
          await refreshFirebaseToken(true).then((newToken) => {
            const oldHeaders = operation.getContext().headers as Record<
              string,
              string
            >
            // modify the operation context with a new token
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: `firebase ${newToken.firebaseToken}`,
              },
            })
            if (count < 5) return true
            return false
          })
        }
        if (count < 5) return true
        return false
      },
    })

    /* Create a link for compose all of the links together */
    const newLink = from([retryLink, errorLink, authLink, splitLink])
    // const newLink = from([errorLink, authLink, splitLink])
    setLink(newLink)
    if (authState === 'firebaseUser') setAuthState('fetchingUser')
    if (authState === 'refreshingRegistered') setAuthState('registeredUser')
    if (authState === 'refreshingAnonymous') setAuthState('anonymousUser')
  }, [token, authState, subscriptionClient, setAuthState, refreshFirebaseToken])

  /* Set the link on the client whenever the link changes */
  useEffect(() => {
    if (!client || !link) return
    client?.setLink(link)
    if (initializing) {
      void client?.resetStore()
      setInitializing(false)
    }
    // Don't add authInitialized as a dependency
  }, [client, initializing, link])

  /* Don't return until we have a client */
  if (
    authState === 'none' ||
    authState === 'initializing' ||
    authState === 'firebaseUser'
  )
    return <Connecting statusMessage="Initializing app client." />
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloContext
