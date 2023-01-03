import React from 'react'
import { Pressable, Text } from 'react-native'

export default function Button({
  label,
  icon = undefined,
  onPress,
}: {
  label: string
  icon?: string | undefined
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={{
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {icon && (
        <Text
          style={{
            color: '#fff',
            fontFamily: 'voyage-icons',
            textAlign: 'center',
            marginRight: 8,
          }}
        >
          w_{icon}
        </Text>
      )}
      <Text
        style={{
          color: '#fff',
          fontFamily: 'ibm-plex-sans',
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export function Ghost({
  label,
  icon = undefined,
  onPress,
}: {
  label: string
  icon?: string | undefined
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      style={{
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        height: 40,
        borderRadius: 8,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8,
      }}
    >
      {icon && (
        <Text
          style={{
            color: '#fff',
            fontFamily: 'voyage-icons',
            textAlign: 'center',
            marginRight: 8,
          }}
        >
          w_{icon}
        </Text>
      )}
      <Text
        style={{
          color: '#fff',
          fontFamily: 'ibm-plex-sans',
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}
