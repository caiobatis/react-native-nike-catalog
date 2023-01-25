import { FunctionComponent } from 'react'

import { HStack, Heading, Image, Text, VStack, Pressable } from 'native-base'

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
        <VStack>
          <Heading fontSize="sm" color="gray.900" fontWeight="semibold" lineHeight="xs" my={2}>
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
        </VStack>

        <Pressable position="absolute" bottom={0} right={0} p={0} onPress={onPress}>
          <Text color="gray.900">Remover</Text>
        </Pressable>
      </HStack>
    </VStack>
  )
}
