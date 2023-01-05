import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import AuthContext from './auth/AuthContext'
import ApolloContext from './apollo/ApolloContext'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
      <NavigationProvider><AuthContext><ApolloContext>{children}</ApolloContext></AuthContext></NavigationProvider>
    </TamaguiProvider>
  )
}
