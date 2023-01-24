import { Heading, Input, ScrollView, VStack } from 'native-base'
import { Icons } from 'src/components'
import { RootStackScreenComponent } from 'src/navigation'

export const HomeScreen: RootStackScreenComponent<'Home'> = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack flex={1} pb={24} pt={6} safeArea space={8}>
          <VStack px={6} space={8}>
            <Heading fontSize="2xl" fontWeight="semibold" lineHeight="md">
              Olá, Ton!
            </Heading>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically
              leftElement={<Icons.Search color="blueGray.500" ml={3} size={6} />}
              placeholder="Busque aqui"
              returnKeyType="search"
              variant="filled"
            />
          </VStack>

          <VStack px={6} space={8}>
            <Heading fontSize="xl" fontWeight="semibold" lineHeight="md">
              Catálogo
            </Heading>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  )
}
