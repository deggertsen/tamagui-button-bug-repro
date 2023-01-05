import Constants from 'expo-constants'
import { requiredString } from './helpers/requiredString'

export const API_URL: string = requiredString(
  Constants.expoConfig?.extra?.EXPO_PUBLIC_API_URL,
  'EXPO_PUBLIC_API_URL',
)