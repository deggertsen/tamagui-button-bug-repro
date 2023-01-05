import Constants from 'expo-constants'
import { requiredString } from './helpers/requiredString'

export const NODE_ENV: string = requiredString(
  Constants.expoConfig?.extra?.NODE_ENV,
  'NODE_ENV',
)

export const AI_DUNGEON_APP_URL: string = requiredString(
  Constants.expoConfig?.extra?.AI_DUNGEON_APP_URL,
  'AI_DUNGEON_APP_URL',
)

export const LATITUDE_API_URL: string = requiredString(
  Constants.expoConfig?.extra?.LATITUDE_API_URL,
  'LATITUDE_API_URL',
)

export const GRAPHQL_HTTP_URL: string = requiredString(
  Constants.expoConfig?.extra?.GRAPHQL_HTTP_URL,
  'GRAPHQL_HTTP_URL',
)