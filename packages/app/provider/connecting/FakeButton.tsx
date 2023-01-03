import React, { useEffect } from 'react'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export default function FakeButton({
  mr = 0,
  ml = 0,
  w = 0,
}: {
  mr?: number
  ml?: number
  w?: number
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
          width: w,
          marginRight: mr,
          marginLeft: ml,
          borderRadius: 8,
          backgroundColor: 'rgba(255,255,255,0.2)',
        },
        style,
      ]}
    />
  )
}