import { Platform } from 'react-native'

export const platform = Platform.OS

export const isWeb = platform === 'web'
export const isAndroid = platform === 'android'
export const isIOS = platform === 'ios'
export const isMobile = platform !== 'web'
export const isElectron =
  platform === 'web' && navigator.userAgent.toLowerCase().includes('electron')
