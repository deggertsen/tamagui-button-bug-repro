/* eslint-disable react/jsx-props-no-spreading */

import React from 'react'
import { styled, GetProps, ButtonFrame, ButtonText, ButtonProps as TamaguiButtonProps, useButton } from 'tamagui'

const CustomButtonFrame = styled(ButtonFrame, {
  padding: "$5",
  borderRadius: '$1',
  paddingHorizontal: '$2',
  variants: {
    circular: {
      true: {
        padding: '$0',
        paddingLeft: 1,
        height: '$5',
        width: '$5',
        maxHeight: '$5',
        maxWidth: '$5',
        borderRadius: '$10',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
    gameplayPrimary: {
      true: {
        borderWidth: 1,
        theme: 'gameplaySecondary',
      },
    },
    gameplaySecondary: {
      true: {
        borderWidth: 1,
        theme: 'gameplaySecondary',
      },
    },
    wrapper: {
      true: {
        padding: 0,
        margin: 0,
        height: 'unset',
        width: 'unset',
        borderRadius: 'unset',
        alignItems: undefined,
        justifyContent: undefined,
      },
    },
  },
})

const CustomButtonText = styled(ButtonText, {
  // ...
})

// to capture the custom variant types you define
type CustomButtonFrameProps = GetProps<typeof CustomButtonFrame>
type CustomButtonTextProps = GetProps<typeof CustomButtonText>

export type CustomButtonProps = TamaguiButtonProps &
  CustomButtonFrameProps &
  CustomButtonTextProps

export const UpdatedButton = CustomButtonFrame.styleable<CustomButtonProps>(
  (propsIn, ref) => {
  const { props } = useButton(propsIn, { Text: CustomButtonText })
  // @ts-ignore
  return <CustomButtonFrame {...props} ref={ref} />
})