import { toString } from 'lodash'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import firebaseConfig from '../FirebaseConfig'
import IBMPlexSans from '../../expo/assets/fonts/IBMPlexSans-Medium.ttf'
import IBMPlexSerif from '../../expo/assets/fonts/IBMPlexSerif-Medium.ttf'
import VoyageIcons from '../../expo/assets/fonts/VoyageIcons-Regular.ttf'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
// Initialize Auth
getAuth(firebaseApp)

function MyApp({ Component, pageProps }: SolitoAppProps) {
  const styleTemplate = `
  @font-face {
    font-family: 'ibm-plex-sans';
    src: url(${toString(IBMPlexSans)}) format('truetype');
  }
  @font-face {
    font-family: 'ibm-plex-serif';
    src: url(${toString(IBMPlexSerif)}) format('truetype');
  }
  @font-face {
    font-family: 'voyage-icons';
    src: url(${toString(VoyageIcons)}) format('truetype');
  }
  `
  return (
    <>
      <Head>
        <title>AI Dungeon</title>
        <meta name="description" content="AI Dungeon, an infinitely generated text adventure powered by deep learning" />
        <link rel="icon" href="/favicon.ico" />
        <style type="text/css">{styleTemplate}</style>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()

  return (
    <NextThemeProvider onChangeTheme={setTheme}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  )
}

export default MyApp
