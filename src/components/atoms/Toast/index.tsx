import { FunctionComponent } from 'react'

import { Box, Text, HStack, Center } from 'native-base'

import { ToastProps } from './types'
import Icons from '../Icons'

export const Toast: FunctionComponent<ToastProps> = ({ type = 'success', text }) => {
  const colors = {
    success: 'green.500',
    warning: 'warning.400',
    error: 'error.600'
  }

  const currentColor = colors[type]

  const icons = {
    success: Icons.ThumbsUp,
    warning: Icons.Exclamation,
    error: Icons.ThumbsDown
  }

  const CurrentIcon = icons[type]

  return (
    <HStack minW="full" position="relative" p={4}>
      <Box bg={currentColor} px={4} h={12} borderRadius="full" w="full" testID="ToastBox">
        <HStack justifyContent="space-between" alignItems="center" h="full">
          <Text fontSize="sm" numberOfLines={1} color="white">
            {text}
          </Text>

          <Center bg="#fdfdfd57" size="24px" borderRadius="full">
            <CurrentIcon size="12px" color="white" />
          </Center>
        </HStack>
      </Box>
    </HStack>
  )
}
