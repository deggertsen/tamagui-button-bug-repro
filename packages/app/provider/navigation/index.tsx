import { NavigationContainer, NavigationContainerRefWithCurrent } from '@react-navigation/native'
import { useMemo } from 'react'

export function NavigationProvider({
  navigationRef,
  children,
}: {
  navigationRef: NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>
  children: React.ReactNode
}) {
  const linking = {
    prefixes: [
      'https://play.aidungeon.io', // ai-dungeon-app production
      'https://beta.aidungeon.io', // ai-dungeon-app staging
      'https://ai-dungeon-app-main.netlify.app', // ai-dungeon-app staging
      'http://localhost:19006', // ai-dungeon-app local web
    ],
    config: {
      screens: {
        tab: {
          screens: {
            home: {
              screens: {
                dashboard: '',
              },
            },
            discover: {
              screens: {
                search: 'discover',
              },
            },
          },
        },
        comments: 'comments/:publicId',
        profile: 'profile/:username',
        scenario: 'scenario/:publicId',
        world: 'world/:publicId',
        adventure: 'adventure/:publicId',
        scenarioPlay: 'scenario/:publicId/play',
        adventureEdit: 'adventure/:publicId/edit',
        adventureImageEdit: 'adventure/:publicId/edit-image',
        adventurePlay: 'adventure/:publicId/play',
        dev: 'developer',
        devOverlays: 'developer/overlays',
        devScreens: 'developer/screens',
        loginRegister: 'signin',
        logout: 'signout',
        multiplayerStart: 'multiplayer',
        newGame: 'new',
        newNativeUpdate: 'update',
        plan: 'plans',
        pricing: 'membership',
        profileEdit: 'profile/:publicId/edit',
        scenarioEdit: 'scenario/:publicId/edit',
        scenarioImageEdit: 'scenario/:publicId/edit-image',
        scenarioScripts: 'scenario/:publicId/scripts',
        settings: 'settings',
        steamSuccess: 'steam-success',
        subscription: 'subscription',
        updateAvatar: 'update-avatar',
        upvotyLogin: 'upvoty-signin',
        worldEdit: 'world/:publicId/edit',
        worldPlay: 'world/:publicId/play',
        worldInfo: 'world/:publicId/info',
      },
    },
  }
  
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{
        dark: true,
        colors: {
          primary: 'rgb(0, 0, 0)',
          background: 'rgb(0,0,0)',
          card: 'rgb(18, 18, 18)',
          text: 'rgb(255,255, 255)',
          border: 'rgb(19, 19, 19)',
          notification: 'rgb(0, 0, 0)',
        },
      }}
      linking={linking}
    >
      {children}
    </NavigationContainer>
  )
}
