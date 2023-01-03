import {
  NavigationProp,
  StackActionHelpers,
  StackNavigationState,
} from '@react-navigation/native'
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'

import { ContentScreensParamList } from '../content/types'

export type HomeStackParamList = ContentScreensParamList & {
  dashboard?: undefined
}

export type DiscoverStackParamList = ContentScreensParamList & {
  search?:
    | {
        contentType?: 'adventure' | 'scenario' | 'world'
        sort?: string
        searchTerm?: string
        timeRange?: string
        published?: 'true' | 'false'
        safe?: 'true' | 'false'
        following?: 'true' | 'false'
        multiplayer?: 'true' | 'false'
      }
    | undefined
}

type ContentStackParamList = HomeStackParamList | DiscoverStackParamList

export type ContentStackNavigatorProp = NavigationProp<
  ContentStackParamList,
  keyof ContentStackParamList,
  string,
  StackNavigationState<ContentStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  StackActionHelpers<ContentStackParamList>
