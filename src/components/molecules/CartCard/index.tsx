import { FunctionComponent } from 'react'

import { HStack, Heading, Image, Text, VStack, Flex } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { CartCardProps } from './types'

export const CartCard: FunctionComponent<CartCardProps> = ({
  brand,
  nickname,
  image,
  name,
  price,
  onPress
}) => {
  return (
    <VStack w="full" rounded="3xl" bgColor="white" justifyContent="center" p={4}>
      <HStack>
        <Image
          w={28}
          h={20}
          source={{
            uri: image
          }}
          alt={name}
        />

        <Flex flex={1}>
          <Heading
            fontSize="sm"
            color="gray.900"
            fontWeight="semibold"
            lineHeight="xs"
            my={2}
            maxW="full"
            isTruncated>
            {brand} {nickname}
          </Heading>

          <VStack>
            <Text fontSize="xs" lineHeight="md" color="gray.700">
              por apenas
            </Text>

            <Text fontSize="sm" fontWeight="bold" lineHeight="md" color="gray.900">
              {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)}
            </Text>
          </VStack>
        </Flex>

        <Flex
          bottom={0}
          right={0}
          py={0.5}
          px={2}
          position="absolute"
          bgColor="warning.300"
          rounded="full">
          <TouchableOpacity onPress={onPress}>
            <Text color="white">Remover</Text>
          </TouchableOpacity>
        </Flex>
      </HStack>
    </VStack>
  )
}
