import { memo } from 'react'

import { Center, Text } from 'native-base'
import Svg, { Circle } from 'react-native-svg'

const FallbackIllustration = () => (
  <Svg width={140} height={158} viewBox="0 0 159 158" fill="none">
    <Circle cx="79.5" cy="78.666" r="78" stroke="#DBDBDB" />

    <Circle
      opacity="0.5"
      cx="79.5"
      cy="78.5923"
      r="58.6978"
      fill="#F5F5F5"
      stroke="#DBDBDB"
      stroke-width="12"
    />

    <Circle opacity="0.5" cx="79.5" cy="78.666" r="45" fill="white" />

    <Center h="full">
      <Text fontSize="xs" color="gray.500">
        Sem dados
      </Text>
    </Center>
  </Svg>
)

export const Fallback = memo(FallbackIllustration)
