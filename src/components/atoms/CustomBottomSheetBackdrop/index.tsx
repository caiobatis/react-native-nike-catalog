import { forwardRef, useMemo } from 'react'

import { BottomSheetModal, BottomSheetBackdropProps } from '@gorhom/bottom-sheet'
import { Pressable } from 'native-base'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'

const CustomBottomSheetBackdrop = forwardRef<BottomSheetModal, BottomSheetBackdropProps>(
  ({ animatedIndex, style }, ref) => {
    const containerAnimatedStyle = useAnimatedStyle(() => ({
      opacity: interpolate(animatedIndex.value + 1, [0, 1], [0, 1], Extrapolate.CLAMP)
    }))

    const containerStyle = useMemo(
      () => [
        style,
        {
          backgroundColor: '#00000050'
        },
        containerAnimatedStyle
      ],
      [style, containerAnimatedStyle]
    )

    return (
      <Animated.View style={containerStyle}>
        {/* @ts-ignore */}
        <Pressable w="full" h="full" onPress={() => ref?.current?.close()} />
      </Animated.View>
    )
  }
)

export default CustomBottomSheetBackdrop
