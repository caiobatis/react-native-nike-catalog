import { useRef } from 'react'

import { BottomSheetModalTypes } from 'atoms'
import { CatalogCard, Header } from 'molecules'
import { Flex, Heading, ScrollView, VStack } from 'native-base'
import { ProductBottomSheet } from 'organisms'
import { RootStackScreenComponent } from 'src/navigation'

const sneakers = [
  {
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
      10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4,
      4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
    ],
    sku: '555088 013',
    slug: 'air-jordan-1-retro-high-og-shadow-2018-555088-013',
    status: 'active',
    story_html:
      '<p>This Nike Air Jordan 1 Retro High OG &#39;Shadow&#39; 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015.</p>\n',
    upper_material: 'Leather'
  },
  {
    box_condition: 'good_condition',
    brand_name: 'Air Jordan',
    category: ['basketball'],
    collection_slugs: ['air-jordan-4-bred'],
    color: 'Black',
    designer: 'Tinker Hatfield',
    details: 'Black/Cement Grey-Summit White-Fire Red',
    gender: ['youth'],
    grid_picture_url:
      'https://image.goat.com/375/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png',
    has_picture: true,
    has_stock: true,
    id: 507844,
    keywords: ['black cement', 'bred', 'jordan 4 bred', 'underRetail'],
    main_picture_url:
      'https://image.goat.com/750/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png',
    midsole: 'Air',
    name: "Air Jordan 4 Retro OG GS 'Bred' 2019",
    nickname: 'Bred',
    original_picture_url:
      'https://image.goat.com/attachments/product_template_pictures/images/020/806/444/original/507844_00.png.png',
    product_template_id: 507844,
    release_date: '2019-05-04T23:59:59.000Z',
    release_date_unix: 1557014399,
    release_year: 2019,
    retail_price_cents: 14000,
    shoe_condition: 'new_no_defects',
    silhouette: 'Air Jordan 4',
    size_range: [3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7],
    sku: '408452 060',
    slug: 'air-jordan-4-retro-og-gs-bred-408452-060',
    status: 'active',
    story_html: null,
    upper_material: ''
  },
  {
    box_condition: 'no_original_box',
    brand_name: 'Air Jordan',
    category: ['basketball'],
    collection_slugs: ['2016', 'goat-clean', 'jordan', 'space-jam'],
    color: 'Black',
    designer: 'Tinker Hatfield',
    details: 'Black/Concord-White',
    gender: ['men'],
    grid_picture_url:
      'https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
    has_picture: true,
    has_stock: true,
    id: 52015,
    keywords: [],
    main_picture_url:
      'https://image.goat.com/750/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
    midsole: 'Air',
    name: "Air Jordan 11 Retro 'Space Jam' 2016",
    nickname: 'Space Jam',
    original_picture_url:
      'https://image.goat.com/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png',
    product_template_id: 52015,
    release_date: '2016-12-09T23:59:59.000Z',
    release_date_unix: 1481327999,
    release_year: 2016,
    retail_price_cents: 22000,
    shoe_condition: 'used',
    silhouette: 'Air Jordan 11',
    size_range: [
      10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4,
      4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
    ],
    sku: '378037 003',
    slug: 'air-jordan-11-retro-space-jam-378037-003',
    status: 'active',
    story_html:
      '<p>The Air Jordan 11 Retro ‘Space Jam’ 2016 commemorates the 20th anniversary of the movie ‘Space Jam.’ Worn by Michael Jordan as a Player Exclusive (PE) in both the movie and the 1995 NBA Playoffs, the 2016 retro ended up being Nike’s largest and most successful shoe launch ever. This 2016 sneaker is a more faithful reproduction of the original PE than the 2000 and 2009 retros. The sneaker also swaps the traditional #23 for MJ’s comeback #45 on the heel, a first for an Air Jordan 11 retail release. </p>\n',
    upper_material: ''
  },
  {
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
      10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4,
      4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
    ],
    sku: '378037 623',
    slug: 'air-jordan-11-retro-gym-red-378037-623-abb4fed8-42d8-4998-9858-47500cc06cc7',
    status: 'active',
    story_html:
      '<p>For Chicago Bulls Fans, the historical significance of the Air Jordan 11 Retro ‘Win Like 96’ will be abundantly clear. 1996 is the year that the Bulls capped off the regular season with a record-breaking 72 wins, on their way to a fourth NBA title in six seasons. Michael wore the Jordan 11 during that magical run, and this December 2017 release, dressed in a dazzling shade of red, honors the ’96 squad that couldn’t lose.</p>\n',
    upper_material: 'Patent Leather'
  },
  {
    box_condition: 'no_original_box',
    brand_name: 'Air Jordan',
    category: ['basketball'],
    collection_slugs: ['goat-clean', 'jordan'],
    color: 'White',
    designer: 'Tinker Hatfield',
    details: 'White/Legend Blue',
    gender: ['men'],
    grid_picture_url:
      'https://image.goat.com/375/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png',
    has_picture: true,
    has_stock: true,
    id: 13607,
    keywords: [],
    main_picture_url:
      'https://image.goat.com/750/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png',
    midsole: 'Air',
    name: "Air Jordan 11 Retro 'Legend Blue' 2014",
    nickname: 'Legend Blue',
    original_picture_url:
      'https://image.goat.com/attachments/product_template_pictures/images/010/223/048/original/13607_00.png.png',
    product_template_id: 13607,
    release_date: '2014-12-20T23:59:59.000Z',
    release_date_unix: 1419119999,
    release_year: 2014,
    retail_price_cents: 20000,
    shoe_condition: 'used',
    silhouette: 'Air Jordan 11',
    size_range: [
      10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 18, 3.5, 4,
      4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5
    ],
    sku: '378037 117',
    slug: 'air-jordan-11-retro-legend-blue-378037-117',
    status: 'active',
    story_html:
      '<p>The Air Jordan 11 Retro ‘Legend Blue’ 2014 was based on the 1996 Jordan 11 ‘Columbia’ first worn by Jordan during the 1996 NBA All-Star Game. Inspired by the classic colorway Jordan wore as a Tarheel, the ‘Columbia’ first retroed in 2001 for the Jordan 11 ‘Columbia’ Retro release.</p>\n',
    upper_material: ''
  }
]

export const HomeScreen: RootStackScreenComponent<'Home'> = () => {
  const productRef = useRef<BottomSheetModalTypes>(null)

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack flex={1} pb={24} pt={6} safeArea space={8} px={6}>
          <Header />

          <VStack>
            <Heading fontSize="xl" fontWeight="semibold" lineHeight="md">
              Catálogo
            </Heading>

            <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
              {sneakers.map((item) => (
                <CatalogCard
                  key={item.id}
                  brand={item.brand_name}
                  nickname={item.nickname}
                  image={item.main_picture_url}
                  name={item.name}
                  designer={item.designer}
                  price={item.retail_price_cents}
                  onPress={() => productRef.current?.present()}
                />
              ))}
            </Flex>
          </VStack>
        </VStack>
      </ScrollView>

      <ProductBottomSheet ref={productRef} />
    </>
  )
}
