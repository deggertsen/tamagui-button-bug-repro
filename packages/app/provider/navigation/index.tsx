import { NavigationContainer, NavigationContainerRefWithCurrent } from '@react-navigation/native'

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
        settings: 'settings',
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
