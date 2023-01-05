import { requiredString } from "./helpers/requiredString";

export const AI_DUNGEON_APP_URL: string = requiredString(
    process.env.NEXT_PUBLIC_AI_DUNGEON_APP_URL,
    'NEXT_PUBLIC_AI_DUNGEON_APP_URL',
  )