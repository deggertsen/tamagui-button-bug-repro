import { requiredString } from "./helpers/requiredString";

export const AI_DUNGEON_APP_URL: string = requiredString(
    process.env.NEXT_PUBLIC_AI_DUNGEON_APP_URL,
    'NEXT_PUBLIC_AI_DUNGEON_APP_URL',
  )

export const LATITUDE_API_URL: string = requiredString(
    process.env.NEXT_PUBLIC_LATITUDE_API_URL,
    'NEXT_PUBLIC_LATITUDE_API_URL',
  )