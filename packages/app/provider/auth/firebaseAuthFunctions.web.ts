import { AuthMethod, AuthOption } from 'app/features/account/login/types'
import * as firebaseAuth from 'firebase/auth'
import { isString } from 'lodash'

import { setItem } from '../../helpers/AsyncStorage'

type FirebaseUser = firebaseAuth.User

export const signInAnonymously = () => {
  return firebaseAuth.signInAnonymously(firebaseAuth.getAuth())
}

export const getCurrentUser = (): FirebaseUser | null => {
  return firebaseAuth.getAuth()?.currentUser
}

export const sendPasswordResetEmail = async (email: string) => {
  return firebaseAuth.sendPasswordResetEmail(firebaseAuth.getAuth(), email)
}

export const onIdTokenChanged = (
  authStateChanged: (firebaseUser: FirebaseUser | null) => null
) => {
  return firebaseAuth.onIdTokenChanged(firebaseAuth.getAuth(), authStateChanged)
}

export const signOut = async () => {
  return firebaseAuth.signOut(firebaseAuth.getAuth())
}

const getAuthMethod = ({
  method,
  option,
  user,
  password,
  email,
}: {
  method: string
  option: string
  user: FirebaseUser
  password?: string
  email?: string
}): Promise<firebaseAuth.UserCredential | string> => {
  if (method === 'google') {
    // Sign in using a redirect.
    const provider = new firebaseAuth.GoogleAuthProvider()
    // Start a sign in process for an unauthenticated user.
    // provider.addScope('profile') We probably only need email and google id
    provider.addScope('email')
    provider.setCustomParameters({ prompt: 'select_account' })
    if (option === 'login')
      return firebaseAuth.signInWithPopup(firebaseAuth.getAuth(), provider)
    return firebaseAuth.linkWithPopup(user, provider)
  }
  if (method === 'apple') {
    const provider = new firebaseAuth.OAuthProvider('apple.com')
    provider.addScope('email')
    if (option === 'login')
      return firebaseAuth.signInWithPopup(firebaseAuth.getAuth(), provider)
    return firebaseAuth.linkWithPopup(user, provider)
  }
  // Login with email
  if (email && password) {
    if (option === 'login') {
      return firebaseAuth.signInWithEmailAndPassword(
        firebaseAuth.getAuth(),
        email,
        password
      )
    }
    // Register with email
    const credential = firebaseAuth.EmailAuthProvider.credential(
      email,
      password
    )
    return firebaseAuth.linkWithCredential(user, credential)
  }
  return Promise.resolve('You must provide and email and password.')
}

export const getFirebaseToken = async (
  firebaseUser: FirebaseUser,
  forceRefresh = false
) => {
  const tokenResult = await firebaseUser?.getIdTokenResult(forceRefresh)
  return {
    firebaseToken: tokenResult?.token ?? '',
    firebaseTokenExpiration: new Date(tokenResult?.expirationTime ?? ''),
  }
}

export const firebaseLoginRegister = async ({
  method,
  option,
  user,
  email,
  password,
}: {
  method: AuthMethod
  option: AuthOption
  user: FirebaseUser
  email?: string
  password?: string
}): Promise<string | null> => {
  if (!user) return 'An unknown error ocurred.'

  return getAuthMethod({ method, option, email, password, user })
    .then((userCredential) => {
      if (isString(userCredential)) return userCredential.toString()
      // If they just registered, log them in now.
      if (option === 'register') {
        if (!userCredential.user.emailVerified)
          void firebaseAuth.sendEmailVerification(userCredential.user)
        return firebaseLoginRegister({
          method,
          option: 'login',
          user,
          email,
          password,
        })
      }
      // Now they are officially logged in.
      void setItem('AID_AUTH', 'firebase')
      return null
    })
    .catch((error: { code: string }) => {
      if (error.code === 'auth/user-not-found') {
        return 'Email not found. Please try again or register a new account.'
      }
      if (error.code === 'auth/email-already-in-use') {
        return 'That email address is already in use!'
      }
      if (error.code === 'auth/invalid-email') {
        return 'That email address is invalid!'
      }
      if (error.code === 'auth/wrong-password') {
        return 'Incorrect password. Please try again.'
      }
      if (error.code === 'auth/weak-password') {
        return 'Insecure password. Please make it longer.'
      }
      if (error.code === 'auth/provider-already-linked') {
        return 'That account already exists!'
      }
      if (error.code === 'auth/too-many-requests') {
        return 'Unusual behavior detected, please wait a few minutes and try again.'
      }
      if (error.code === 'auth/network-request-failed') {
        return 'Request failed due to a server error, please try again.'
      }
      if (
        [
          'auth/cancelled-popup-request',
          'auth/popup-closed-by-user',
          'auth/invalid-credential',
        ].includes(error.code)
      ) {
        return 'Request cancelled, please try again.'
      }
      if (error.code === 'EUNSPECIFIED' || error.code === '1000') {
        return 'Sign in cancelled. Please try again.'
      }

      return JSON.stringify(error)
    })
}

export const updateEmail = (firebaseUser: FirebaseUser, email: string) =>
  firebaseAuth.updateEmail(firebaseUser, email)

export const updatePassword = (firebaseUser: FirebaseUser, password: string) =>
  firebaseAuth.updatePassword(firebaseUser, password)

export const sendEmailVerification = (firebaseUser: FirebaseUser) =>
  firebaseAuth.sendEmailVerification(firebaseUser)

export const deleteUser = (firebaseUser: FirebaseUser) =>
  firebaseAuth.deleteUser(firebaseUser)
