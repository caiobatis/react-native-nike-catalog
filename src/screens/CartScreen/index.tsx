import { FunctionComponent } from 'react'

import { CartCard, Header } from 'molecules'
import { Button, Heading, ScrollView, Text, VStack } from 'native-base'

import { useCart } from './hook'
import { CartProps } from './types'

const item = {
  box_condition: 'no_original_box',
  brand_name: 'Air Jordan',
  category: ['basketball'],
  collection_slugs: ['goat-clean', 'jordan'],
  color: 'Red',
  designer: 'Tinker Hatfield',
  details: 'Gym Red/Black-White',
  gender: ['men'],
  grid_picture_url:
    'https://image.goat.com/375/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png',
  has_picture: true,
  has_stock: true,
  id: 235806,
  keywords: [],
  main_picture_url:
    'https://image.goat.com/750/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png',
  midsole: 'Air',
  name: "Air Jordan 11 Retro 'Win Like '96'",
  nickname: "Win Like '96",
  original_picture_url:
    'https://image.goat.com/attachments/product_template_pictures/images/008/870/353/original/235806_00.png.png',
  product_template_id: 235806,
  release_date: '2017-12-09T23:59:59.000Z',
  release_date_unix: 1512863999,
  release_year: 2017,
  retail_price_cents: 22000,
  shoe_condition: 'used',
  silhouette: 'Air Jordan 11',
  size_range: [
    10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4, 4.5,
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
  ],
  sku: '378037 623',
  slug: 'air-jordan-11-retro-gym-red-378037-623-abb4fed8-42d8-4998-9858-47500cc06cc7',
  status: 'active',
  story_html:
    '<p>For Chicago Bulls Fans, the historical significance of the Air Jordan 11 Retro ‘Win Like 96’ will be abundantly clear. 1996 is the year that the Bulls capped off the regular season with a record-breaking 72 wins, on their way to a fourth NBA title in six seasons. Michael wore the Jordan 11 during that magical run, and this December 2017 release, dressed in a dazzling shade of red, honors the ’96 squad that couldn’t lose.</p>\n',
  upper_material: 'Patent Leather'
}

export const CartScreen: FunctionComponent<CartProps> = ({ navigation, route }) => {
  const { handleCheckout } = useCart({ navigation, route })

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
              Você tem 3 produtos no carrinho
            </Text>

            <VStack space={4} mt={4}>
              <CartCard
                key={item.id}
                brand={item.brand_name}
                nickname={item.nickname}
                image={item.main_picture_url}
                name={item.name}
                designer={item.designer}
                price={item.retail_price_cents}
                onPress={() => null}
              />
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