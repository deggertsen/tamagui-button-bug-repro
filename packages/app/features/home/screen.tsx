import { Anchor, H1, Paragraph, XStack, YStack } from '@my/ui'
import { ChevronRight } from '@tamagui/lucide-icons'
import React from 'react'

export function HomeScreen() {

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
        <H1>User{`\n`}Settings</H1>
      </XStack>
      <YStack overflow="hidden">
          <Anchor
            href="/login"
            accessibilityLabel="Login Button"
            accessibilityHint="log in"
            style={undefined}
          >
            <XStack alignItems="center" justifyContent="space-between">
              <Paragraph>Login</Paragraph>
              <ChevronRight color='#828A92' />
            </XStack>
          </Anchor>
      </YStack>
    </YStack>
  )
}
