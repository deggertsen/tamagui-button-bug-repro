import { ReactNativeChildren } from 'app/types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { AuthMethod, AuthOption } from '../../features/account/login/types'
import Connecting from '../connecting/Connecting'
import {
  FirebaseUser,
  sendPasswordResetEmail,
  signOut,
  onIdTokenChanged,
  firebaseLoginRegister,
  getFirebaseToken,
  signInAnonymously,
  sendEmailVerification,
  updateEmail,
  updatePassword,
  deleteUser,
} from './firebaseAuthFunctions'

type AuthState =
  | 'initializing'
  | 'none'
  | 'firebaseUser'
  | 'fetchingUser'
  | 'gettingAnonymousUser'
  | 'anonymousUser'
  | 'registeredUser'
  | 'loggingIn'
  | 'refreshingAnonymous'
  | 'refreshingRegistered'

type ContextType = {
  accessToken: string
  authState: AuthState
  setAuthState: (x: AuthState) => void
  requestLogout: () => Promise<void>
  firebaseUser: FirebaseUser | null
  loginRegister: ({
    method,
    option,
    email,
    password,
  }: {
    method: AuthMethod
    option: AuthOption
    email?: string
    password?: string
  }) => Promise<string | null | void>
  refreshFirebaseToken: (force?: boolean) => Promise<{
    firebaseToken: string
    firebaseTokenExpiration: Date
  }>
  updateFirebasePassword: (password: string) => Promise<void>
  sendFirebasePasswordResetEmail: (email: string) => Promise<void>
  updateFirebaseEmail: (email: string) => Promise<void>
  sendFirebaseEmailVerification: () => Promise<void>
  deleteFirebaseUser: () => Promise<void>
}

const Context = React.createContext<ContextType>({
  accessToken: '',
  authState: 'initializing',
  setAuthState: () => {},
  requestLogout: async () => {},
  firebaseUser: null,
  loginRegister: async () => {},
  refreshFirebaseToken: async (force = false) => {
    return Promise.resolve({
      firebaseToken: force ? '' : '',
      firebaseTokenExpiration: new Date(),
    })
  },
  updateFirebasePassword: () => {
    return Promise.resolve()
  },
  sendFirebasePasswordResetEmail: () => Promise.resolve(),
  updateFirebaseEmail: () => Promise.resolve(),
  sendFirebaseEmailVerification: () => Promise.resolve(),
  deleteFirebaseUser: () => Promise.resolve(),
})

export const useAuthContext = (): ContextType => React.useContext(Context)

/* How this works documented here: https://www.notion.so/latitudegames/How-Auth-Works-60025066d53e46638c794dd459c47676 */
function AuthContext({
  children,
}: {
  children: ReactNativeChildren
}): JSX.Element {
  const [authState, setAuthState] = useState<AuthState>('initializing')
  const [accessToken, setAccessToken] = useState<string>('')
  const [accessTokenExpiration, setAccessTokenExpiration] = useState<
    Date | undefined
  >()
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null)

  /* authState: initializing
  -> 'none' When firebase has initialized */

  /* authState: none
  We're here whenever we need to get a new firebase user and/or  token.
  -> 'firebaseUser' When there is a firebase user.
  -> 'gettingAnonymousUser' When there is not a firebase user and we try to sign in anonymously */
  /* Manage the access token here, grab a new one whenever we have a new firebase user */

  /* authState: gettingAnonymousUser
  -> 'firebaseUser' If we got an anonymous firebase user */

  useEffect(() => {
    if (!firebaseUser && authState === 'none') {
      setAuthState('gettingAnonymousUser')
      void signInAnonymously()
    }
  }, [authState, firebaseUser])

  useEffect(() => {
    const updateAccessToken = async (user: FirebaseUser) => {
      const { firebaseToken, firebaseTokenExpiration } = await getFirebaseToken(
        user
      )
      if (firebaseTokenExpiration)
        setAccessTokenExpiration(firebaseTokenExpiration)
      /* Don't reset if it's the same */
      if (firebaseToken && `firebase ${firebaseToken}` !== accessToken) {
        setAccessToken(`firebase ${firebaseToken}`)
        setAuthState('firebaseUser')
      }
    }

    /* Wait for it to initialize before deciding if we need an anonymous user */
    if (
      firebaseUser &&
      (authState === 'none' || authState === 'gettingAnonymousUser')
    ) {
      void updateAccessToken(firebaseUser)
    }
  }, [firebaseUser, authState, accessToken])

  /* authState: firebaseUser 
  Next we create a subscription client. This happens in the ApolloContext and is triggered when the token changes.
  -> 'client' If it succeeds at creating the subscription client */

  /* authState: client
  Once we have a client the UserContext will try and grab the latitude user. 
  -> 'anonymousUser' If it finds an anonymous user
  -> 'registeredUser' If it finds a registered user
  -> 'anonymousUser' If it doesn't find any it will create an anonymous user */

  /* authState: anonymousUser
  This is a stable state where the user can play.
  -> 'loggingIn' when the user decides to try to login / register an account
  -> 'refreshingAnonymous' when the token expires

  /* authState: loggingIn
  Intermediate state while logging in / registering.
  -> 'none' when we are successful at logging in / registering. The firebase user is reset
  -> 'anonymousUser' when we aren't successful we return to the previous state. */

  /* authState: registeredUser
  Stable state where a user is registered.
  -> 'none' when the user logs out.
  -> 'refreshingRegistered' when the token expires

  /* authState: refreshingAnonymous
  When we need to refresh the auth token
  -> 'anonymousUser' when the token is reset

    /* authState: refreshingRegistered
  When we need to refresh the auth token
  -> 'registeredUser' when the token is reset */

  const refreshFirebaseToken = useCallback(
    async (force = false) => {
      if (firebaseUser) {
        if (force) {
          setAuthState(
            firebaseUser?.isAnonymous
              ? 'refreshingAnonymous'
              : 'refreshingRegistered'
          )
        } else {
          if (authState === 'registeredUser')
            setAuthState('refreshingRegistered')
          if (authState === 'anonymousUser') setAuthState('refreshingAnonymous')
        }

        const { firebaseToken, firebaseTokenExpiration } =
          await getFirebaseToken(firebaseUser, true)

        /* Don't reset if it's the same */
        if (firebaseTokenExpiration)
          setAccessTokenExpiration(firebaseTokenExpiration)
        if (firebaseToken) {
          setAccessToken(`firebase ${firebaseToken}`)
        }
        return {
          firebaseToken: firebaseToken ?? '',
          firebaseTokenExpiration: firebaseTokenExpiration ?? new Date(),
        }
      }

      return Promise.resolve({
        firebaseToken: '',
        firebaseTokenExpiration: new Date(),
      })
    },
    [firebaseUser, authState]
  )

  useEffect(() => {
    // When there is a new firebase user then update it.
    function authStateChanged(newFirebaseUser: FirebaseUser | null) {
      if (firebaseUser !== newFirebaseUser) setFirebaseUser(newFirebaseUser)
      if (authState === 'initializing') setAuthState('none')
      return null
    }
    const subscriber = onIdTokenChanged(authStateChanged)
    return subscriber // unsubscribe on unmount
  }, [authState, firebaseUser])

  useEffect(() => {
    const now = new Date()
    if (accessTokenExpiration) {
      // If we need to test a shorter timeout time
      // const timeoutTime = 10000
      const timeoutTime =
        accessTokenExpiration.getTime() - now.getTime() - 4000 * 60
      const timeout = setTimeout(
        () => {
          void refreshFirebaseToken()
        },
        timeoutTime > 0 ? timeoutTime : 10000
      )
      return () => clearTimeout(timeout)
    }
    return () => {}
  }, [accessTokenExpiration, refreshFirebaseToken])

  /* Define the login register function for firebase */
  const loginRegister = useCallback(
    async ({
      method,
      option,
      email,
      password,
    }: {
      method: AuthMethod
      option: AuthOption
      email?: string
      password?: string
    }): Promise<string | null | void> => {
      if (!firebaseUser) return 'Failed to get firebase user.'
      setAuthState('loggingIn')
      const error = await firebaseLoginRegister({
        method,
        option,
        email,
        password,
        user: firebaseUser,
      })

      /* If we have a error that means there was an error and we weren't able to update successfully */
      if (error) {
        setAuthState('anonymousUser')
        return error
      }
      setAuthState('none')
      return error
    },
    [firebaseUser]
  )

  const requestLogout = useCallback(async () => {
    const result = await signOut()
    setFirebaseUser(null)
    setAuthState('none')
    return result
  }, [])

  const updateFirebaseEmail = useCallback(
    async (email: string) => {
      if (firebaseUser) await updateEmail(firebaseUser, email)
    },
    [firebaseUser]
  )

  const updateFirebasePassword = useCallback(
    async (password: string) => {
      if (firebaseUser) await updatePassword(firebaseUser, password)
    },
    [firebaseUser]
  )

  const sendFirebaseEmailVerification = useCallback(async () => {
    if (firebaseUser) await sendEmailVerification(firebaseUser)
  }, [firebaseUser])

  const sendFirebasePasswordResetEmail = useCallback(
    async (email: string) => {
      if (firebaseUser) await sendPasswordResetEmail(email)
    },
    [firebaseUser]
  )

  const deleteFirebaseUser = useCallback(async () => {
    if (firebaseUser) await deleteUser(firebaseUser)
  }, [firebaseUser])

  // useEffect(() => {
  //   console.log({ accessToken, authState })
  // }, [accessToken, authState])

  const publicInterface = useMemo(
    () => ({
      accessToken,
      authState,
      setAuthState,
      requestLogout,
      loginRegister,
      firebaseUser,
      refreshFirebaseToken,
      updateFirebasePassword,
      sendFirebasePasswordResetEmail,
      updateFirebaseEmail,
      sendFirebaseEmailVerification,
      deleteFirebaseUser,
    }),
    [
      accessToken,
      authState,
      requestLogout,
      loginRegister,
      firebaseUser,
      refreshFirebaseToken,
      updateFirebasePassword,
      sendFirebasePasswordResetEmail,
      updateFirebaseEmail,
      sendFirebaseEmailVerification,
      deleteFirebaseUser,
    ]
  )

  if (authState === 'none')
    return <Connecting statusMessage="Checking Access." />
  return <Context.Provider value={publicInterface}>{children}</Context.Provider>
}

export default AuthContext
