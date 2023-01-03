import React, { useEffect } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export default function FakeCircle({
  mr = 0,
  ml = 0,
}: {
  mr?: number
  ml?: number
}) {
  const flashing = useSharedValue(0.7)

  const style = useAnimatedStyle(() => {
    return {
      opacity: flashing.value,
    }
  })

  useEffect(() => {
    flashing.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.ease }),
      -1,
      true
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Animated.View
      style={[
        {
          height: 40,
          width: 40,
          marginRight: mr,
          marginLeft: ml,
          borderRadius: 999,
          backgroundColor: 'rgba(255,255,255,0.2)',
        },
        style,
      ]}
    />
  )
}
