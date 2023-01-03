import { XStack } from '@my/ui/types'
import React from 'react'

export default function Tail({
  color = 'muted.800',
  position = 'center',
}: {
  color?: string
  position?: 'center' | 'left' | 'right'
}): JSX.Element {
  type FlexAlignType = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  const positionMap: Record<string, FlexAlignType> = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
  }
  return (
    <XStack w="100%" h="0" px="3c" alignItems={positionMap[position]}>
      <XStack
        h="4c"
        w="4c"
        // rounded="4px"
        position="relative"
        top={-4}
        bg={color}
        style={{ transform: [{ rotate: '45deg' }] }}
      />
    </XStack>
  )
}
