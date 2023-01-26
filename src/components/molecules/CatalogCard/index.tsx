import { FunctionComponent } from 'react'

import { HStack, Heading, Image, Text, VStack, View } from 'native-base'
import { Dimensions, TouchableOpacity } from 'react-native'

import { CatalogCardProps } from './types'

export const CatalogCard: FunctionComponent<CatalogCardProps> = ({
  brand,
  nickname,
  image,
  name,
  designer,
  price,
  onPress
}) => {
  const { width } = Dimensions.get('screen')

  const formatedPrice = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)

  return (
    <TouchableOpacity onPress={onPress}>
      <VStack
        h={56}
        my={2}
        w={width / 2 - 16 - 16}
        rounded="3xl"
        bgColor="white"
        justifyContent="center">
        <HStack alignItems="center" px={4}>
          <View px={2} bgColor="gray.400" rounded="full">
            <Text fontSize="2xs" fontWeight="semibold" color="white">
              {designer}
            </Text>
          </View>
        </HStack>

        <Heading fontSize="sm" color="gray.900" fontWeight="semibold" lineHeight="xs" px={4} my={2}>
          {brand} {nickname}
        </Heading>

        <Image
          w={width / 2 - 16 - 16}
          h={24}
          source={{
            uri: image
          }}
          alt={name}
        />

        <VStack>
          <Text fontSize="xs" lineHeight="md" px={4} color="gray.700">
            por apenas
          </Text>

          <Text fontSize="sm" fontWeight="bold" lineHeight="md" px={4} color="gray.900">
            {formatedPrice}
          </Text>
        </VStack>
      </VStack>
    </TouchableOpacity>
  )
}
