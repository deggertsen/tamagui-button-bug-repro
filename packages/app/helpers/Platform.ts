import { Platform } from 'react-native'
import getElectron from 'is-electron'

export const platform = Platform.OS

export const isWeb = platform === 'web'
export const isAndroid = platform === 'android'
export const isIOS = platform === 'ios'
export const isMobile = platform !== 'web'
export const isElectron = getElectron()