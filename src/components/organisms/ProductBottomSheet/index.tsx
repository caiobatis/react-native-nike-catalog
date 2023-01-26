import { forwardRef } from 'react'

import { BottomSheetModalTypes, CustomBottomSheet, Icons } from 'atoms'
import { LinearGradient } from 'expo-linear-gradient'
import { Button, Center, HStack, Heading, Image, Text, VStack, View } from 'native-base'
import { Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import RenderHTML, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html'
import { useCartStoreAtomValue, useSetCartStoreAtom } from 'src/store/cart'

import { ProductBottomSheetProps } from './types'

export const ProductBottomSheet = forwardRef<BottomSheetModalTypes, ProductBottomSheetProps>(
  ({ data: product }, ref) => {
    const { width } = Dimensions.get('screen')

    const customHTMLElementModels = {
      'blue-circle': HTMLElementModel.fromCustomModel({
        tagName: 'blue-circle',
        mixedUAStyles: {
          width: 50,
          height: 50,
          borderRadius: 25,
          alignSelf: 'center',
          backgroundColor: 'blue'
        },
        contentModel: HTMLContentModel.block
      })
    }

    const setCartStore = useSetCartStoreAtom()

    const { items: cartItems } = useCartStoreAtomValue()

    const hasInCart = !!cartItems?.find((item) => item?.id === product?.id)

    return (
      <CustomBottomSheet ref={ref} points={['86%']}>
        <Center
          bgColor="white"
          w={9}
          h={9}
          rounded="full"
          top={6}
          left={4}
          position="absolute"
          zIndex={8}>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => ref.current?.close()}>
            <Icons.ArrowLeft size={6} mr={0.5} color="black" />
          </TouchableOpacity>
        </Center>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }}>
          <VStack space={2} borderTopRadius="xl" pt={6} h="full" overflow="hidden">
            <Image
              mt={2}
              h={250}
              w="full"
              alt={product?.name}
              source={{
                uri: product?.originalPictureUrl
              }}
            />

            <Heading fontSize="xl" color="black" fontWeight="semibold" lineHeight="xs" px={4}>
              {product?.brandName} {product?.nickname}
            </Heading>

            <HStack alignItems="center" px={4}>
              <Text color="gray.700" fontSize="xs">
                Criado por: {product?.designer}
              </Text>
            </HStack>

            <View px={4}>
              <Text fontSize="2xs">
                <RenderHTML
                  contentWidth={width}
                  source={{
                    html: product?.storyHtml ?? ''
                  }}
                  customHTMLElementModels={customHTMLElementModels}
                />
              </Text>
            </View>

            <HStack px={4} alignItems="flex-start" justifyContent="space-between">
              <VStack>
                <Text fontSize="xs" lineHeight="md" color="gray.700">
                  por apenas
                </Text>

                <Text fontSize="lg" fontWeight="bold" lineHeight="md" color="gray.900">
                  {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
                    product?.retailPriceCents ?? 0
                  )}
                </Text>
              </VStack>

              <VStack alignItems="flex-end">
                <Text fontSize="xs" lineHeight="md" color="gray.700">
                  ganhe {product?.name.length} pontos
                </Text>

                <Icons.Ton size={8} mr={0.5} color="black" />
              </VStack>
            </HStack>

            <VStack px={4} pt={6} pb={10}>
              <Button
                colorScheme="gray"
                bgColor="black"
                px={8}
                opacity={hasInCart ? 0.6 : 1}
                rounded="xl"
                onPress={() =>
                  !hasInCart && [
                    // @ts-ignore
                    ref?.current?.close(),
                    setCartStore({
                      items: [...cartItems, product]
                    })
                  ]
                }>
                {hasInCart ? 'Já está no carrinho' : 'Adicionar no carrinho'}
              </Button>
            </VStack>
          </VStack>

          <View position="absolute" w="full" h={250} top={0} zIndex={-1}>
            <LinearGradient
              colors={['#fff', '#fff', '#ddd', '#fff']}
              style={{
                width,
                height: 300
              }}
            />
          </View>
        </ScrollView>
      </CustomBottomSheet>
    )
  }
)
