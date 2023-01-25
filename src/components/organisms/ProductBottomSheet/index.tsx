import { forwardRef } from 'react'

import { BottomSheetModalTypes, CustomBottomSheet, Icons } from 'atoms'
import { Button, Center, Flex, HStack, Heading, Image, Text, VStack, View } from 'native-base'
import { Dimensions, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import RenderHTML, { HTMLContentModel, HTMLElementModel } from 'react-native-render-html'

const product = {
  box_condition: 'good_condition',
  brand_name: 'Air Jordan',
  category: ['basketball'],
  collection_slugs: [
    'air-jordan-1',
    'goat-clean',
    'jordan',
    'jordan-1',
    'rose-bowl-flea-market',
    'the-ones-that-started-it-all'
  ],
  color: 'Black',
  designer: 'Peter Moore',
  details: 'Black/White-Medium Grey',
  gender: ['men'],
  grid_picture_url:
    'https://image.goat.com/375/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png',
  has_picture: true,
  has_stock: true,
  id: 218099,
  keywords: [],
  main_picture_url:
    'https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png',
  midsole: 'Air',
  name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
  nickname: 'Shadow',
  original_picture_url:
    'https://image.goat.com/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png',
  product_template_id: 218099,
  release_date: '2018-04-14T23:59:59.000Z',
  release_date_unix: 1523750399,
  release_year: 2018,
  retail_price_cents: 16000,
  shoe_condition: 'used',
  silhouette: 'Air Jordan 1',
  size_range: [
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4, 4.5,
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
  ],
  sku: '555088 013',
  slug: 'air-jordan-1-retro-high-og-shadow-2018-555088-013',
  status: 'active',
  story_html:
    '<p>This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.</p>\n',
  upper_material: 'Leather'
}

export const ProductBottomSheet = forwardRef<BottomSheetModalTypes>((_, ref) => {
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

  return (
    <CustomBottomSheet ref={ref} points={['90%']}>
      <VStack space={2} borderTopRadius="xl" pt={6} h="full" overflow="hidden">
        <Center bgColor="white" w={9} h={9} rounded="full" ml={4}>
          {/* @ts-ignore */}
          <TouchableOpacity onPress={() => ref.current?.close()}>
            <Icons.ArrowLeft size={6} mr={0.5} color="black" />
          </TouchableOpacity>
        </Center>

        <Image
          h={250}
          w="full"
          source={{
            uri: product.original_picture_url
          }}
          alt={product.name}
        />

        <Heading fontSize="xl" color="black" fontWeight="semibold" lineHeight="xs" px={4}>
          {product.brand_name} {product.nickname}
        </Heading>

        <HStack alignItems="center" px={4}>
          <Text color="gray.700" fontSize="xs">
            Criado por: {product.designer}
          </Text>
        </HStack>

        <View px={4}>
          <Text fontSize="2xs">
            <RenderHTML
              contentWidth={width}
              source={{
                html: product.story_html
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
                product.retail_price_cents
              )}
            </Text>
          </VStack>

          <VStack alignItems="flex-end">
            <Text fontSize="xs" lineHeight="md" color="gray.700">
              ganhe {product.name.length} pontos
            </Text>

            <Icons.Ton size={8} mr={0.5} color="black" />
          </VStack>
        </HStack>

        <VStack px={4} pt={6}>
          <Button colorScheme="gray" bgColor="black" px={8} rounded="xl">
            Adicionar no carrinho
          </Button>
        </VStack>

        <View position="absolute" w="full" h="full" top={-350} zIndex={-1}>
          <View
            w="full"
            h="full"
            bgColor="gray.200"
            position="absolute"
            style={[
              {
                transform: [{ rotate: '-75deg' }]
              }
            ]}
          />
        </View>

        <View position="absolute" w="full" h="full" top={-320} zIndex={-2}>
          <View
            w="full"
            h="full"
            bgColor="#08f53d"
            position="absolute"
            style={[
              {
                transform: [{ rotate: '75deg' }]
              }
            ]}
          />
        </View>
      </VStack>
    </CustomBottomSheet>
  )
})
