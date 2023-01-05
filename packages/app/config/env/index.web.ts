import { requiredString } from "./helpers/requiredString";

export const NODE_ENV: string = requiredString(
    process.env.NEXT_PUBLIC_NODE_ENV,
    'NEXT_PUBLIC_NODE_ENV',
)

export const AI_DUNGEON_APP_URL: string = requiredString(
    process.env.NEXT_PUBLIC_AI_DUNGEON_APP_URL,
    'NEXT_PUBLIC_AI_DUNGEON_APP_URL',
)

export const LATITUDE_API_URL: string = requiredString(
    process.env.NEXT_PUBLIC_LATITUDE_API_URL,
    'NEXT_PUBLIC_LATITUDE_API_URL',
)

export const GRAPHQL_HTTP_URL: string = requiredString(
    process.env.NEXT_PUBLIC_GRAPHQL_HTTP_URL,
    'NEXT_PUBLIC_GRAPHQL_HTTP_URL',
)