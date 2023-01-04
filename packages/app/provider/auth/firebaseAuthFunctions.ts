import {
  appleAuth,
  appleAuthAndroid,
} from '@invertase/react-native-apple-authentication'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { isString } from 'lodash'

import { setItem } from 'app/helpers/AsyncStorage'
import { isAndroid, isIOS } from 'app/helpers/Platform'
import { AuthMethod, AuthOption } from 'app/features/account/login/types'

export type FirebaseUser = FirebaseAuthTypes.User
type UserCredential = FirebaseAuthTypes.UserCredential

GoogleSignin.configure({
  webClientId:
    '292747045222-qtpn5nr0agihh4rd684m3fkp5je0oppg.apps.googleusercontent.com',
})

export const signInAnonymously = () => {
  return auth().signInAnonymously()
}

export const sendPasswordResetEmail = async (email: string) => {
  return auth().sendPasswordResetEmail(email)
}

export const onIdTokenChanged = (
  authStateChanged: (firebaseUser: FirebaseUser | null) => null
) => {
  return auth().onIdTokenChanged(authStateChanged)
}

export const signOut = async () => {
  return auth().signOut()
}

const getAuthMethod = async ({
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
}): Promise<UserCredential | string> => {
  if (method === 'google') {
    const { idToken } = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    if (option === 'login') return auth().signInWithCredential(googleCredential)
    return user.linkWithCredential(googleCredential)
  }
  if (method === 'apple') {
    const getAppleIdToken = async () => {
      if (isAndroid) {
        appleAuthAndroid.configure({
          // The Service ID you registered with Apple
          clientId: 'io.aidungeon',
          redirectUri:
            'https://aidungeon-2c6cc.firebaseapp.com/__/auth/handler',
          responseType: appleAuthAndroid.ResponseType.ALL,
          scope: appleAuthAndroid.Scope.EMAIL,
        })
        const appleAuthRequestResponse = await appleAuthAndroid.signIn()
        const {
          id_token: identityToken,
          nonce,
          user: appleUser,
        } = appleAuthRequestResponse
        return { identityToken, nonce, appleUser }
      }
      if (isIOS) {
        // Start the sign-in request
        const appleAuthRequestResponse = await appleAuth.performRequest({
          requestedOperation: appleAuth.Operation.LOGIN,
          requestedScopes: [appleAuth.Scope.EMAIL],
        })
        const credentialState = await appleAuth.getCredentialStateForUser(
          appleAuthRequestResponse.user
        )
        if (credentialState === appleAuth.State.AUTHORIZED) {
          // Create a Firebase credential from the response
          const {
            identityToken,
            nonce,
            user: appleUser,
          } = appleAuthRequestResponse
          return { identityToken, nonce, appleUser }
        }
      }
      return undefined
    }
    const appleSignInResult = await getAppleIdToken()
    if (
      !appleSignInResult ||
      isString(appleSignInResult) ||
      !appleSignInResult.identityToken
    )
      return 'Apple Sign-In failed'
    const { identityToken, nonce } = appleSignInResult
    const appleCredential = auth.AppleAuthProvider.credential(
      identityToken,
      nonce
    )
    // Sign the user in with the credential
    if (option === 'login') return auth().signInWithCredential(appleCredential)
    return user.linkWithCredential(appleCredential)
  }
  // Login with email
  if (email && password) {
    if (option === 'login') {
      return auth().signInWithEmailAndPassword(email, password)
    }
    // Register with email
    const credential = auth.EmailAuthProvider.credential(email, password)
    return user.linkWithCredential(credential)
  }
  return 'You must provide and email and password.'
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
      if (isString(userCredential)) return userCredential
      // If they just registered, log them in now.
      if (option === 'register') {
        if (!userCredential.user.emailVerified)
          void userCredential.user.sendEmailVerification()
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
      if (error.code === 'auth/cancelled-popup-request') {
        return 'Request cancelled, please try again.'
      }
      if (error.code === 'EUNSPECIFIED' || error.code === '1000') {
        return 'Sign in cancelled. Please try again.'
      }

      return JSON.stringify(error)
    })
}

export const updateEmail = (firebaseUser: FirebaseUser, email: string) =>
  firebaseUser.updateEmail(email)

export const updatePassword = (firebaseUser: FirebaseUser, password: string) =>
  firebaseUser.updatePassword(password)

export const sendEmailVerification = (firebaseUser: FirebaseUser) =>
  firebaseUser.sendEmailVerification()

export const deleteUser = (firebaseUser: FirebaseUser) => firebaseUser.delete()

export const getCurrentUser = (): FirebaseUser | null => {
  const { currentUser } = auth()
  return currentUser
}
