import { useLazyQuery } from '@apollo/client'
import { NODE_ENV } from 'app/config/env'
import _, { isEmpty } from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'

import {
  UserContextGetUserQuery,
  UserContextGetUserQueryVariables,
} from '../../generated/graphql'
import sendErrorEvent from '../../helpers/ErrorEvents'
import { platform } from '../../helpers/Platform'
import { ReactNativeChildren } from '../../types'
import { useAuthContext } from '../auth/AuthContext'
import Connecting from '../connecting/Connecting'
import GET_USER from './queries/GetUser'

type UserContextType = {
  user: UserContextGetUserQuery['user'] | undefined
  userVerified: boolean
  refetch: () => void
  startPolling: (pollInterval: number) => void
  stopPolling: () => void
}

const Context = React.createContext<UserContextType>({
  user: undefined,
  userVerified: false,
  refetch: () => {},
  startPolling: () => {},
  stopPolling: () => {},
})

export const useUser = (): UserContextType => React.useContext(Context)

export default function UserContextProvider({
  children,
}: {
  children: ReactNativeChildren
}): JSX.Element {
  const [initialized, setInitialized] = useState<boolean>(false)
  const [getUserError, setGetUserError] = useState<string | null>(null)
  const { authState, setAuthState, firebaseUser } = useAuthContext()
  const { requestLogout } = useAuthContext()

  useEffect(() => {
    if (!initialized && firebaseUser) setInitialized(true)
  }, [firebaseUser, initialized])

  const [
    fetchUser,
    { data, loading, networkStatus, refetch, startPolling, stopPolling },
  ] = useLazyQuery<UserContextGetUserQuery, UserContextGetUserQueryVariables>(
    GET_USER,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: (userData) => {
        if (userData.user.email) setAuthState('registeredUser')
        else setAuthState('anonymousUser')
      },
      onError: (error) => {
        if (error.message.includes('JSON Parse error'))
          setGetUserError('Unable to connect. Please reload and try again.')
        else setGetUserError(error.message)

        void sendErrorEvent({
          message: 'aid.firebase.user.not_authorized',
          extensions: {
            userId: firebaseUser?.uid,
            code: 'GRAPHQL_ERROR',
            ...error,
          },
          path: ['user_context', platform],
        })
      },
    }
  )

  const user = data?.user

  useEffect(() => {
    if (authState !== 'fetchingUser') return
    if (!firebaseUser?.uid) return
    void fetchUser()
  }, [authState, fetchUser, firebaseUser?.uid, user])

  const userVerified = !!firebaseUser?.emailVerified

  const publicInterface = useMemo(
    () => ({
      user: user ?? undefined,
      userVerified,
      refetch,
      startPolling,
      stopPolling,
    }),
    [refetch, startPolling, stopPolling, user, userVerified]
  )

  const isDev = NODE_ENV === 'development'

  if (!user || (user.firebaseUid !== firebaseUser?.uid && !isDev)) {
    const retryCallback = () => {
      void sendErrorEvent({
        message: 'aid.user_context.retry_callback',
        extensions: {
          userId: firebaseUser?.uid,
        },
        path: ['user_context'],
      })
      setGetUserError(null)
      void requestLogout()
    }
    if (!isEmpty(getUserError)) {
      if (
        getUserError?.includes('500') ||
        getUserError?.includes('ENOTFOUND') ||
        getUserError?.includes('ETIMEDOUT') ||
        getUserError?.includes('Network')
      ) {
        return (
          <Connecting
            retryCallback={() => {
              void refetch()
            }}
            errorMessage={`Server Error: ${_.toString(getUserError)}`}
          />
        )
      }
      return (
        <Connecting
          retryCallback={retryCallback}
          errorMessage={`User Error: ${_.toString(getUserError)}`}
        />
      )
    }
    if (!firebaseUser && initialized) {
      void sendErrorEvent({
        message: 'aid.firebase.auth_initialization_error',
        extensions: {
          code: 'AUTHENTICATION_ERROR',
        },
        path: ['user_context', platform],
      })
      return (
        <Connecting
          retryCallback={retryCallback}
          errorMessage="Unable to initiate authentication. Please clear the cache and reload the app."
        />
      )
    }
    if (!loading && networkStatus < 7) {
      sendErrorEvent({
        message: 'aid.user_loading_error',
        path: ['user_context'],
        extensions: { code: 'APOLLO_ERROR', networkStatus, firebaseUser },
      })
      return (
        <Connecting
          retryCallback={() => {
            void refetch()
          }}
          errorMessage="Failed to reach the server, please try again."
        />
      )
    }

    return (
      <Connecting statusMessage="Gathering quest information... Please refresh the page if it doesn't load after 3 seconds (ctrl+r / cmd+r / restart your app)" />
    )
  }

  if (authState === 'fetchingUser')
    return <Connecting statusMessage="Getting character information." />
  return <Context.Provider value={publicInterface}>{children}</Context.Provider>
}
