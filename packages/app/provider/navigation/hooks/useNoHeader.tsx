import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'

function useNoHeader(): void {
  /* Set up navigation */
  const navigation = useNavigation()

  /* Apply header title on load */
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])
}

export default useNoHeader
