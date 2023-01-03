import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { useNavigationContainerRef } from '@react-navigation/native'
import { RootStackParamList } from './navigation/types'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const navigationRef = useNavigationContainerRef<RootStackParamList>()
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme="DungeonVanilla" {...rest}>
      <NavigationProvider navigationRef={navigationRef}>{children}</NavigationProvider>
    </TamaguiProvider>
  )
}
