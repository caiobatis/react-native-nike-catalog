import { FunctionComponent } from 'react'

import { Icons, InputText } from 'atoms'
import { Flex, HStack, Heading, Pressable, Text, VStack, View } from 'native-base'

export const Header: FunctionComponent = () => {
  return (
    <VStack space={6} bgColor="white" p={4} rounded="3xl">
      <HStack alignItems="center">
        <View flex={1} />

        <Pressable _pressed={{ opacity: 0.4 }} flex={1} p={2}>
          <Icons.Nike color="black" />
        </Pressable>

        <Pressable p={2} position="relative" _pressed={{ opacity: 0.4 }}>
          <Icons.Cart color="black" />

          <Flex
            w={4}
            h={4}
            rounded="full"
            bgColor="green.600"
            justifyContent="center"
            alignItems="center"
            position="absolute">
            <Text fontSize="xs" lineHeight="sm" fontWeight="bold" color="white">
              1
            </Text>
          </Flex>
        </Pressable>
      </HStack>

      <VStack>
        <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
          Just do it!
        </Heading>

        <Text fontSize="md" lineHeight="md">
          Sinta todo o seu potencial
        </Text>
      </VStack>

      <InputText
        leftElement={<Icons.Search color="black" ml={3} size={6} />}
        placeholder="Busque aqui"
        returnKeyType="search"
      />
    </VStack>
  )
}
