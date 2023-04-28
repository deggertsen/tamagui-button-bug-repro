/* eslint-disable react/jsx-props-no-spreading */

import React, { forwardRef, Ref } from 'react'
import { styled, TamaguiElement, Button, GetProps } from 'tamagui'

const StyledButton = styled(Button, {
  height: '$5',
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

export type ButtonProps = GetProps<typeof StyledButton>

export const CustomButton = forwardRef(
  ({ children, theme, ...props }: ButtonProps, ref: Ref<TamaguiElement>) => {
    const buttonTheme = theme || 'core2'
    return (
      <StyledButton
        ref={ref}
        theme={buttonTheme}
        textProps={{
          fontSize: '$2',
          textTransform: 'uppercase',
          marginTop: 0,
          marginBottom: 0,
        }}
        {...props}
      >
        {children}
      </StyledButton>
    )
  }
)
