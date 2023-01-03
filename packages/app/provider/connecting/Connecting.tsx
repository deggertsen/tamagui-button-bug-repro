/* Alan - this component is used outside of the NativeBaseProvider context.
As a result, only React Native primitives and explicit styles can be used in this component. */

import React, { useEffect, useState } from 'react'
import {
  Image,
  ImageSourcePropType,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import flame from 'app/assets/images/load.gif'
import Button, { Ghost } from './Button'
// import FakeButton from './FakeButton'
// import FakeCircle from './FakeCircle'
// import FakeLabel from './FakeLabel'

function Connecting({
  retryCallback = undefined,
  statusMessage = undefined,
  errorMessage = undefined,
}: {
  retryCallback?: () => void
  statusMessage?: string
  errorMessage?: string
}): JSX.Element {
  const [showMessages, setShowMessages] = useState<boolean>(false)
  const [showRetry, setShowRetry] = useState<boolean>(false)
  const { width: windowWidth } = useWindowDimensions()
  const isBreakpointMobile = windowWidth < 688

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessages(true)
    }, 3000)
    const retryTimeout = setTimeout(() => {
      setShowRetry(true)
    }, 7000)
    return () => {
      clearTimeout(timeout)
      clearTimeout(retryTimeout)
    }
  }, [])

  // retry callback: show any error messages, say you're having trouble connecting, and offer to retry or contact support
  // no retry callback: connecting...

  return (
    <SafeAreaProvider>
      <SafeAreaView
        edges={['top', 'bottom']}
        style={{ flexDirection: 'column', flex: 1 }}
      >
        <View
          style={{
            height: isBreakpointMobile ? 58 : 80,
            borderBottomWidth: 1,
            borderColor: 'rgba(255,255,255,0.15)',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: isBreakpointMobile ? 8 : 24,
          }}
        >
          {/* {isBreakpointMobile && <FakeCircle />} */}
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              accessibilityIgnoresInvertColors={false}
              style={{
                width: 112,
                height: 16,
              }}
              source={{
                uri: 'https://static.aidungeon.io/artwork/aidungeon_logo.png',
              }}
            />
            {!isBreakpointMobile && (
              <>
                {/* <FakeLabel w={100} ml={40} />
                <FakeLabel w={100} ml={40} /> */}
              </>
            )}
          </View>
          {!isBreakpointMobile && (
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              {/* <FakeCircle mr={8} />
              <FakeCircle mr={8} />
              <FakeCircle mr={24} />
              <FakeButton w={73} /> */}
            </View>
          )}
          {/* {isBreakpointMobile && <FakeCircle />} */}
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 32,
          }}
        >
          {!retryCallback && (
            <Image
              style={{ height: 40, width: 40 }}
              source={flame as ImageSourcePropType}
              accessibilityIgnoresInvertColors={false}
            />
          )}
          {retryCallback && (
            <>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'voyage-icons',
                  marginBottom: 8,
                  fontSize: 24,
                }}
              >
                w_triangle_warn
              </Text>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'ibm-plex-serif',
                  fontSize: 24,
                  marginBottom: 8,
                  textAlign: 'center',
                }}
              >
                We&apos;re having a little trouble connecting to the AI.
              </Text>
            </>
          )}
          {retryCallback && showMessages && statusMessage && (
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ibm-plex-sans',
                opacity: 0.5,
                textAlign: 'center',
              }}
            >
              {statusMessage}
            </Text>
          )}
          {retryCallback && showMessages && errorMessage && (
            <Text
              style={{
                color: '#fff',
                fontFamily: 'ibm-plex-sans',
                opacity: 0.5,
                textAlign: 'center',
              }}
            >
              {errorMessage}
            </Text>
          )}
          {retryCallback && (
            <View style={{ marginTop: 16 }}>
              {showRetry && (
                <Button
                  label="RETRY"
                  icon="retry"
                  onPress={() => retryCallback()}
                />
              )}
              <Ghost label="CONTACT SUPPORT" onPress={() => retryCallback()} />
            </View>
          )}
        </View>
        {isBreakpointMobile ? (
          <View
            style={{
              height: 58,
              borderTopWidth: 1,
              borderColor: 'rgba(255,255,255,0.15)',
              alignItems: 'center',
              justifyContent: 'space-around',
              flexDirection: 'row',
              paddingHorizontal: '10%',
            }}
          />
        ) : (
          <>{null}</>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default Connecting
