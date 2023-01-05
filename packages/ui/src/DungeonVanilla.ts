import { extendTheme } from 'native-base'
import { Easing, Platform } from 'react-native'

// This builds the object needed to use 8px cell sizes.
const sizes = (): Record<string, string> => {
  const sizeDict: Record<string, string> = {}
  for (let i = 0; i < 129; i += 1) {
    sizeDict[`${i / 2}c`] = `${(i / 2) * 8}px`
  }
  return sizeDict
}

const DungeonVanilla = extendTheme({
  config: { useSystemColorMode: false, initialColorMode: 'dark' },
  space: {
    ...sizes(),
  },
  sizes: {
    'wrap-xl': '1392px',
    'wrap-lg': '1040px',
    'wrap-sm': '425px',
    'wrap-md': '688px',
    ...sizes(),
  },
  breakpoints: {
    // todo: instruction
    base: 0,
    sm: 700,
    md: 900,
    lg: 1300,
  },
  fontConfig: {
    PlexSans: {
      100: {
        normal: 'ibm-plex-sans',
      },
      200: {
        normal: 'ibm-plex-sans',
      },
      300: {
        normal: 'ibm-plex-sans',
      },
      400: {
        normal: 'ibm-plex-sans',
      },
      500: {
        normal: 'ibm-plex-sans',
      },
      600: {
        normal: 'ibm-plex-sans',
      },
    },
    PlexSerif: {
      100: {
        normal: 'ibm-plex-serif',
      },
      200: {
        normal: 'ibm-plex-serif',
      },
      300: {
        normal: 'ibm-plex-serif',
      },
      400: {
        normal: 'ibm-plex-serif',
      },
      500: {
        normal: 'ibm-plex-serif',
      },
      600: {
        normal: 'ibm-plex-serif',
      },
    },
  },
  VoyageIcon: {
    100: {
      normal: 'voyage-icons',
    },
    200: {
      normal: 'voyage-icons',
    },
    300: {
      normal: 'voyage-icons',
    },
    400: {
      normal: 'voyage-icons',
    },
    500: {
      normal: 'voyage-icons',
    },
    600: {
      normal: 'voyage-icons',
    },
  },
  fonts: {
    body: 'PlexSans',
    heading: 'PlexSerif',
    icon: 'VoyageIcon',
  },
  colors: {
    primary: {
      50: '#fff2dc',
      100: '#ffe4b5',
      200: '#ffd58d',
      300: '#ffc765',
      400: '#ffb83c',
      500: '#f8ae2c',
      600: '#f1a31d',
      700: '#df9616',
      800: '#c3861b',
      900: '#a9761e',
    },
    'primary-alpha': {
      50: 'rgba(248, 174, 44, 0.05)',
      100: 'rgba(248, 174, 44, 0.1)',
      200: 'rgba(248, 174, 44, 0.2)',
      300: 'rgba(248, 174, 44, 0.3)',
      400: 'rgba(248, 174, 44, 0.4)',
      500: 'rgba(248, 174, 44, 0.5)',
      600: 'rgba(248, 174, 44, 0.6)',
      700: 'rgba(248, 174, 44, 0.7)',
      800: 'rgba(248, 174, 44, 0.8)',
      900: 'rgba(248, 174, 44, 0.9)',
    },
    muted: {
      50: '#FFFFFF',
      100: '#828A92',
      200: '#666D75',
      300: '#586067',
      400: '#4C535A',
      500: '#3A4045',
      600: '#2F3539',
      700: '#272C30',
      800: '#1B1F22',
      900: '#000000',
    },
    'light-alpha': {
      50: 'rgba(221, 240, 255, 0.05)',
      100: 'rgba(221, 240, 255, 0.1)',
      200: 'rgba(221, 240, 255, 0.2)',
      300: 'rgba(221, 240, 255, 0.3)',
      400: 'rgba(221, 240, 255, 0.4)',
      500: 'rgba(221, 240, 255, 0.5)',
      600: 'rgba(221, 240, 255, 0.6)',
      700: 'rgba(221, 240, 255, 0.7)',
      800: 'rgba(221, 240, 255, 0.8)',
      900: 'rgba(221, 240, 255, 0.9)',
    },
    'dark-alpha': {
      50: 'rgba(0, 0, 0, 0.05)',
      100: 'rgba(0, 0, 0, 0.1)',
      200: 'rgba(0, 0, 0, 0.2)',
      300: 'rgba(0, 0, 0, 0.3)',
      400: 'rgba(0, 0, 0, 0.4)',
      500: 'rgba(0, 0, 0, 0.5)',
      600: 'rgba(0, 0, 0, 0.6)',
      700: 'rgba(0, 0, 0, 0.7)',
      800: 'rgba(0, 0, 0, 0.8)',
      900: 'rgba(0, 0, 0, 0.9)',
    },
    premium: {
      50: '#ffffff',
      100: '#23c361',
      200: '#0bb0ff',
      300: '#b35ae9',
      400: '#f8ae2c',
    },
  },
  fontSizes: {
    small: '12px',
    regular: '14px',
    medium: '14px',
    large: '16px',
    display: '18px',
    sm: '12px',
    rg: '14px',
    md: '14px',
    lg: '16px',
    xl: '18px',
  },
  shadows: {
    8: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 24,
      },
      shadowOpacity: 0.6,
      shadowRadius: 32,
      elevation: 9,
    },
    9: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 32,
      },
      shadowOpacity: 0.7,
      shadowRadius: 40,
      elevation: 10,
    },
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'muted',
        variant: 'solid',
        size: 'sm',
      },
      variants: {
        solid: ({ colorScheme }: { colorScheme: string }) => {
          return {
            backgroundColor:
              colorScheme === 'muted' ? 'muted.800' : `${colorScheme}.500`,
            _text: {
              color: colorScheme === 'primary' ? 'muted.900' : 'muted.50',
              lineHeight: 18,
              margin: 0,
              padding: 0,
            },
            _icon: {
              color: colorScheme === 'primary' ? 'muted.900' : 'muted.50',
            },
          }
        },
        toolbar: {
          borderRadius: 999,
        },
      },
      baseStyle: () => {
        return {
          height: sizes()['5c'],
          borderRadius: sizes()['1c'],
          padding: 0,
          _text: {
            textTransform: 'uppercase',
          },
          _icon: {
            size: 'md',
            color: 'muted.50',
            top: Platform.OS === 'android' ? -2 : -0.5,
          },
          // these lines are neccessary to use the default hover and pressed states per changes in colorScheme
          _hover: {
            backgroundColor: '',
          },
          _pressed: {
            backgroundColor: '',
          },
        }
      },
      sizes: {
        sm: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['5c'],
        },
        md: {
          _text: {
            fontSize: '14px',
          },
          px: sizes()['2c'],
          height: sizes()['6c'],
        },
        lg: {
          _text: {
            fontSize: '14px',
          },
          px: sizes()['3c'],
          height: sizes()['7c'],
        },
      },
    },
    Input: {
      defaultProps: {
        colorScheme: 'muted',
        variant: 'solid',
        size: 'sm',
      },
      baseStyle: {
        height: sizes()['5c'],
        borderRadius: sizes()['1c'],
        borderWidth: 1,
        borderColor: 'muted.500',
        padding: 0,
        _text: {
          textTransform: 'uppercase',
        },
      },
      sizes: {
        sm: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['5c'],
        },
        md: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['6c'],
        },
        lg: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['7c'],
        },
      },
    },
    TextArea: {
      defaultProps: {
        colorScheme: 'muted',
        variant: 'solid',
        size: 'sm',
      },
      baseStyle: {
        height: sizes()['5c'],
        borderRadius: sizes()['1c'],
        borderWidth: 1,
        borderColor: 'muted.500',
        padding: 0,
        _text: {
          textTransform: 'uppercase',
        },
      },
      sizes: {
        sm: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['5c'],
        },
        md: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['6c'],
        },
        lg: {
          _text: {
            fontSize: '14px',
          },
          height: sizes()['7c'],
        },
      },
    },
    IconButton: {
      baseStyle: {
        height: sizes()['5c'],
        width: sizes()['5c'],
        padding: 0,
        rounded: 'full',
      },
      defaultProps: {
        variant: 'solid',
        size: 'sm',
        colorScheme: 'muted',
        _icon: {
          size: 'md',
          color: 'muted.50',
          top: Platform.OS === 'android' ? 0 : 0,
        },
      },
      variants: {
        solid: ({ colorScheme }: { colorScheme: string }) => {
          return {
            backgroundColor:
              colorScheme === 'muted' ? 'muted.800' : `${colorScheme}.500`,
            color: colorScheme === 'primary' ? 'muted.900' : 'muted.50',
          }
        },
        toolbar: {
          backgroundColor: 'muted.800',
          _hover: {
            backgroundColor: 'light-alpha.50',
          },
          _pressed: {
            backgroundColor: 'light-alpha.100',
          },
        },
      },
      sizes: {
        sm: {
          height: sizes()['5c'],
          width: sizes()['5c'],
        },
        md: {
          height: sizes()['6c'],
          width: sizes()['6c'],
        },
        lg: {
          height: sizes()['7c'],
          width: sizes()['7c'],
        },
      },
    },
    ModalHeader: {
      baseStyle: {
        fontFamily: 'ibm-plex-serif',
        _text: {
          lineHeight: null,
          fontFamily: 'ibm-plex-serif',
          fontSize: '16px',
          margin: 0,
        },
      },
    },
    ModalCloseButton: {
      baseStyle: {
        borderRadius: 999,
      },
    },
    Modal: {
      baseStyle: {
        _backdropFade: {
          backgroundColor: 'rgba(0,0,0,0.8)',
        },
      },
    },
    ModalContent: {
      baseStyle: {
        shadow: 9,
        rounded: true,
        borderWidth: 1,
        borderRadius: sizes()['2c'],
      },
    },
    FormControlLabel: {
      baseStyle: {
        textTransform: 'uppercase',
        mb: sizes()['2c'],
        fontSize: '12px',
        _text: {
          textTransform: 'uppercase',
          fontSize: '12px',
        },
      },
    },
    SliderThumb: {
      baseStyle: {
        backgroundColor: 'white',
      },
    },
    SliderFilledTrack: {
      baseStyle: {
        backgroundColor: 'white',
      },
    },
    Select: {
      defaultProps: {
        _actionSheetContent: {
          px: '2c',
          pb: '2c',
        },
        _actionSheetBody: {
          borderRadius: 8,
          overflow: Platform.OS === 'ios' ? 'hidden' : null,
        },
      },
      baseStyle: {
        backgroundColor: 'muted.700',
        lineHeight: null,
        minHeight: sizes()['6c'],
        height: sizes()['6c'],
        maxHeight: sizes()['6c'],
        width: '100%',
      },
    },
    Text: {
      baseStyle: ({ fontSize }: { fontSize: string }) => {
        // todo: docs
        switch (fontSize) {
          case 'display' || 'xl':
            return {
              fontSize: '18px',
              my: -1,
            }
          case 'large' || 'lg':
            return {
              fontSize: '16px',
              my: -1,
            }
          case 'regular' || 'medium' || 'rg' || 'md':
            return {
              fontSize: '14px',
              my: -2,
            }
          case 'small' || 'sm':
            return {
              fontSize: '12px',
              my: -1,
            }
          default:
            return {
              fontSize: '14px',
              my: -2,
            }
        }
      },
      variants: {
        icon: {
          lineHeight: 18,
          fontFamily: 'voyage-icons',
          position: 'relative',
          pt: Platform.OS === 'android' ? '6px' : '0',
        },
      },
      defaultProps: {
        fontSize: 'md',
      },
    },
    Heading: {
      defaultProps: {
        size: 'md',
      },
      sizes: {
        display: {
          fontSize: '50px',
          lineHeight: '62px',
          mb: -3,
          mt: -4,
        },
        large: {
          fontSize: '33px',
          lineHeight: '40px',
          mb: -2,
          mt: -2,
        },
        regular: {
          fontSize: '22px',
          lineHeight: '32px',
          mt: -2,
          mb: -2,
        },
        medium: {
          fontSize: '22px',
          lineHeight: '32px',
          mt: -2,
          mb: -2,
        },
        small: {
          fontSize: '18px',
          lineHeight: '24px',
          mt: -1,
          mb: -1,
        },
        xl: {
          fontSize: '50px',
          lineHeight: '62px',
          mb: -3,
          mt: -4,
        },
        lg: {
          fontSize: '33px',
          lineHeight: '40px',
          mb: -2,
          mt: -2,
        },
        rg: {
          fontSize: '22px',
          lineHeight: '32px',
          mt: -2,
          mb: -2,
        },
        md: {
          fontSize: '22px',
          lineHeight: '32px',
          mt: -2,
          mb: -2,
        },
        sm: {
          fontSize: '18px',
          lineHeight: '24px',
          mt: -1,
          mb: -1,
        },
      },
      baseStyle: {
        fontFamily: 'ibm-plex-serif',
        fontWeight: '500',
      },
    },
    ActionsheetContent: {
      transition: {
        duration: 500,
        easing: Easing.bezier(0.5, 0.5, 0, 1),
      },
      baseStyle: {
        borderWidth: 0,
        p: sizes()['2c'],
        backgroundColor: 'muted.800',
        borderTopRadius: sizes()['3c'],
      },
    },
    ActionsheetItem: {
      defaultProps: {
        _hover: {
          backgroundColor: 'muted.600',
        },
        _pressed: {
          backgroundColor: 'muted.600',
        },
      },
      baseStyle: {
        backgroundColor: 'muted.700',
        justifyContent: 'center',
        px: sizes()['3c'],
        mb: '1px',
        _text: {
          fontSize: '14px',
          flex: 1,
          lineHeight: null,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'space-between',
          margin: 0,
        },
      },
    },
    Menu: {
      baseStyle: {
        backgroundColor: 'muted.800',
        py: 0,
        overflow: 'hidden',
        borderRadius: '16px',
      },
    },
    MenuItem: {
      defaultProps: {
        _hover: {
          backgroundColor: 'muted.600',
        },
      },
      baseStyle: {
        py: '16px',
        backgroundColor: 'muted.700',
        _text: {
          lineHeight: null,
          margin: 0,
          height: '100%',
          padding: 0,
        },
      },
    },
    Avatar: {
      defaultProps: {
        size: 'lg',
        bg: 'muted.700',
        borderWidth: 1,
        borderColor: 'muted.500',
        _text: {
          color: 'muted.200',
        },
      },
      sizes: {
        xs: {
          height: sizes()['1c'],
          width: sizes()['1c'],
        },
        sm: {
          height: sizes()['3c'],
          width: sizes()['3c'],
        },
        md: {
          height: sizes()['5c'],
          width: sizes()['5c'],
        },
        lg: {
          height: sizes()['8c'],
          width: sizes()['8c'],
        },
        xl: {
          height: sizes()['13c'],
          width: sizes()['13c'],
        },
        '2xl': {
          height: sizes()['21c'],
          width: sizes()['21c'],
        },
      },
    },
    Row: {
      defaultProps: {
        alignItems: 'center',
      },
    },
  },
})

export default DungeonVanilla
