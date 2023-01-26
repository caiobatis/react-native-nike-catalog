import { FunctionComponent } from 'react'

import { CartCard, Header } from 'molecules'
import { Button, Center, Heading, ScrollView, Text, VStack } from 'native-base'
import { Fallback } from 'src/components/atoms'

import { useCart } from './hook'
import { CartProps } from './types'

export const CartScreen: FunctionComponent<CartProps> = ({ navigation, route }) => {
  const { handleCheckout, cartItems, handleRemoveItem } = useCart({ navigation, route })

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack flex={1} pb={24} pt={6} safeArea space={8} px={6}>
          <Header type="small" />

          <VStack>
            <Heading fontSize="xl" fontWeight="semibold" lineHeight="md" color="black">
              Carrinho
            </Heading>

            <Text fontSize="md" color="gray.700">
              Você tem {cartItems.length} produtos no carrinho
            </Text>

            <VStack space={4} mt={4}>
              {!cartItems?.length && (
                <Center py={8}>
                  <Fallback text="Carrinho vazio" />
                </Center>
              )}

              {cartItems.map(
                (item) =>
                  item && (
                    <CartCard
                      key={item.id}
                      name={item.name!}
                      brand={item.brandName!}
                      designer={item.designer!}
                      nickname={item.nickname!}
                      image={item.gridPictureUrl!}
                      price={item.retailPriceCents!}
                      onPress={() => handleRemoveItem(item)}
                    />
                  )
              )}
            </VStack>

            <Button
              colorScheme="gray"
              bgColor="black"
              px={8}
              rounded="xl"
              mt={8}
              onPress={handleCheckout}>
              Finalizar compra
            </Button>
          </VStack>
        </VStack>
      </ScrollView>
    </>
  )
}
