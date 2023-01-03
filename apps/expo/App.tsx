import 'expo-dev-client'
import React from 'react'
import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'ibm-plex-sans': require('./assets/fonts/IBMPlexSans-Medium.ttf'),
    'ibm-plex-serif': require('./assets/fonts/IBMPlexSerif-Medium.ttf'),
    'voyage-icons': require('./assets/fonts/VoyageIcons-Regular.ttf'),
  })

  if (!fontsLoaded) {
    return <>{null}</>
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  )
}
