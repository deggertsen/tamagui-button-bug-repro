import { ReactNode } from 'react'
import {
  ParamListBase,
  StackActionHelpers,
  StackNavigationState,
  NavigationProp,
} from '@react-navigation/native'
import {
  NativeStackNavigationEventMap,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack'
import { DiscoverStackParamList, HomeStackParamList } from './provider/navigation/stacks/types'
import { RootStackParamList, TabNavigatorParamList } from './provider/navigation/types'


/* We specifically do NOT want strings or numbers to be valid children for React Native children other than for Text components */
type ReactNativeChild = ReactNativeChild[] | ReactNode | JSX.Element | boolean | undefined
export type ReactNativeChildren = ReactNativeChild | ReactNativeChild[]

type Identity<T> = { [P in keyof T]: T[P] }
export type Replace<T, K extends keyof T, TReplace> = Identity<
  Pick<T, Exclude<keyof T, K>> & {
    [P in K]?: TReplace
  }
>

export type ValueOf<T> = T[keyof T]

// Note (mitchg) - as of 8/2/22, the type definition of
// NativeStackNavigationProp has a bug: NavigationProp expects 6
// generic arguments, but 5 are provided. (NavigatorID is missing in
// the middle.) This type is a temporary fix. It may be fixed in the
// most recent version of
// native-stack. https://github.com/react-navigation/react-navigation/blob/818862b78b670e7d951c7d3859d60135a130a995/packages/native-stack/src/types.tsx#L36
export type RootStackNavigatorProp = NavigationProp<
  RootStackParamList,
  keyof RootStackParamList,
  string,
  StackNavigationState<RootStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  NavigationProp<
    TabNavigatorParamList,
    keyof TabNavigatorParamList,
    string,
    StackNavigationState<TabNavigatorParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  NavigationProp<
    HomeStackParamList,
    keyof HomeStackParamList,
    string,
    StackNavigationState<HomeStackParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  NavigationProp<
    DiscoverStackParamList,
    keyof DiscoverStackParamList,
    string,
    StackNavigationState<DiscoverStackParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  StackActionHelpers<RootStackParamList> &
  StackActionHelpers<TabNavigatorParamList> &
  StackActionHelpers<HomeStackParamList> &
  StackActionHelpers<DiscoverStackParamList>

export type RootStackNavigatorPropIgnoreParams = NavigationProp<
  ParamListBase,
  keyof RootStackParamList,
  string,
  StackNavigationState<RootStackParamList>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap
> &
  NavigationProp<
    ParamListBase,
    keyof TabNavigatorParamList,
    string,
    StackNavigationState<TabNavigatorParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  NavigationProp<
    ParamListBase,
    keyof HomeStackParamList,
    string,
    StackNavigationState<HomeStackParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  NavigationProp<
    ParamListBase,
    keyof DiscoverStackParamList,
    string,
    StackNavigationState<DiscoverStackParamList>,
    NativeStackNavigationOptions,
    NativeStackNavigationEventMap
  > &
  StackActionHelpers<ParamListBase> &
  StackActionHelpers<TabNavigatorParamList> &
  StackActionHelpers<HomeStackParamList> &
  StackActionHelpers<DiscoverStackParamList>
