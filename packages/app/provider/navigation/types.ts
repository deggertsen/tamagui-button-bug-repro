import { NavigatorScreenParams } from '@react-navigation/native'

import { HomeStackParamList, DiscoverStackParamList } from './stacks/types'

export type TabNavigatorParamList = {
  home: NavigatorScreenParams<HomeStackParamList>
  discover: NavigatorScreenParams<DiscoverStackParamList>
}

export type RootStackParamList = {
  tab: NavigatorScreenParams<TabNavigatorParamList>
  adventureEdit: { publicId: string }
  adventureImageEdit: { publicId: string }
  adventurePlay: {
    publicId?: string
    shortCode?: string
    isCustomStart?: boolean
  }
  adventureRead: { publicId?: string }
  dev: undefined
  devOverlays: undefined
  devScreens: undefined
  emailHandlers: {
    mode: 'resetPassword' | 'recoverEmail' | 'verifyEmail'
    oobCode: string
    continueUrl: 'profile'
  }
  loginRegister: undefined
  logout: undefined
  multiplayerStart: undefined
  newGame: undefined
  newNativeUpdate: { updateUrl: string }
  plan: { name: string }
  pricing: { waitingForAccess?: 'true' | 'false' } | undefined
  profile: { username?: string } | undefined
  scenarioEdit: { publicId: string }
  scenarioImageEdit: { publicId: string }
  scenarioPlay: {
    publicId: string
    isCustomStart?: boolean
  }
  scenarioScripts: { publicId: string }
  settings: undefined
  steamSuccess: undefined
  subscription: undefined
  upvotyLogin: { redirectUrl: string }
  worldEdit: { publicId: string }
  worldInfo:
    | { scenarioId: string; adventureId?: undefined; worldId?: undefined }
    | { adventureId: string; scenarioId?: undefined; worldId?: undefined }
    | { worldId: string; adventureId?: undefined; scenarioId?: undefined }
  worldPlay: { publicId: string }
}

export type ScreenName = keyof RootStackParamList

type ScreenConfigEntry<Name extends ScreenName> = {
  title: string
  noBack?: boolean
  breadcrumb?: string[]
  headerType?: string
  testQueryParams?: RootStackParamList[Name][]
}

export type ScreensConfig = {
  [Name in ScreenName]: ScreenConfigEntry<Name>
}

export type Screen = ScreenConfigEntry<keyof RootStackParamList> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>
}
