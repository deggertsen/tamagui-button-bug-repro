import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Popover,
  Separator,
  Sheet,
  Text,
  XStack,
  YStack,
  useToastController,
} from '@my/ui'
import { ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here's a basic starter to show navigating from one screen to another. This screen uses the
          same code on Next.js and React Native.
        </Paragraph>

        <Separator />
        
        <Paragraph ta="center">
          Made by{' '}
          <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">
            @natebirdman
          </Anchor>
          ,{' '}
          <Anchor
            color="$color12"
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            give it a ⭐️
          </Anchor>
        </Paragraph>
      </YStack>

      <XStack>
        <Popover allowFlip stayInFrame>
          <Popover.Trigger asChild><Button>Open Popover</Button></Popover.Trigger>
          <Popover.Adapt platform="touch">
            <Popover.Sheet
              modal
              dismissOnSnapToBottom
              animation="bouncy"
              moveOnKeyboardChange
            >
              <Popover.Sheet.Overlay bc="$blackA6" />
              <Popover.Sheet.Handle
                h="$0.5"
                bc="$core8"
                o={1}
                width="25%"
                maxWidth="$5"
                m="$0"
                mb="$1"
                mt="$5"
                alignSelf="center"
              />
              <Popover.Sheet.Frame>
                <Popover.Adapt.Contents />
              </Popover.Sheet.Frame>
            </Popover.Sheet>
          </Popover.Adapt>
          <Popover.Content>
            <Popover.Arrow />
                <Popover.Close asChild>
                  <Button>
                      <Text>
                        This is a special menu item
                      </Text>
                  </Button>
                </Popover.Close>
          </Popover.Content>
        </Popover>
      </XStack>

      <SheetDemo />
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
