import { FunctionComponent } from 'react'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Icons, InputText } from 'atoms'
import { Center, Flex, Heading, Pressable, Text, VStack, View } from 'native-base'
import { RootStackParamList } from 'src/navigation'

import { HeaderProps } from './types'

export const Header: FunctionComponent<HeaderProps> = ({ type = 'large', onSearch }) => {
  const isLarge = type === 'large'

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <VStack space={6} bgColor="white" p={4} rounded="3xl">
      <Flex alignItems="center" justifyContent="space-between" flexDirection="row">
        {isLarge ? (
          <View opacity={0} w={17} />
        ) : (
          <Pressable _pressed={{ opacity: 0.4 }} w={17} onPress={navigation.goBack}>
            <Center w={8}>
              <Icons.ArrowLeft color="black" size={6} />
            </Center>
          </Pressable>
        )}

        <Pressable _pressed={{ opacity: 0.4 }} w={17}>
          <Center p={2}>
            <Icons.Nike color="black" />
          </Center>
        </Pressable>

        <Flex w={17} alignItems="flex-end">
          {isLarge && (
            <Pressable
              p={2}
              position="relative"
              _pressed={{ opacity: 0.4 }}
              onPress={() => navigation.navigate('Cart')}>
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
          )}
        </Flex>
      </Flex>

      {isLarge && (
        <>
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
            placeholder="Busque por nome, ano, cor"
            returnKeyType="search"
            onEndEditing={(e) => onSearch(e.nativeEvent.text)}
          />
        </>
      )}
    </VStack>
  )
}
