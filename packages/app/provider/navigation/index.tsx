import { NavigationContainer } from '@react-navigation/native'
import { useMemo } from 'react'

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      linking={useMemo(
        () => ({
          prefixes: [
            'https://play.aidungeon.io', // ai-dungeon-app production
            'https://beta.aidungeon.io', // ai-dungeon-app staging
            'https://ai-dungeon-app-main.netlify.app', // ai-dungeon-app staging
            'http://localhost:3001', // ai-dungeon-app local web
          ],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
