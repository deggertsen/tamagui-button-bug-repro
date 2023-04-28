import {
  XStack,
  YStack,
} from '@my/ui'
import { CustomButton } from '@my/ui/src'
import React from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <XStack>
        <CustomButton theme="primary" {...linkProps}>Link to user</CustomButton>
      </XStack>
    </YStack>
  )
}
