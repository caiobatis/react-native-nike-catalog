import { useRef } from 'react'

import { BottomSheetModalTypes, Fallback } from 'atoms'
import { CatalogCard, Header } from 'molecules'
import { Center, Flex, Heading, ScrollView, Spinner, Text, VStack } from 'native-base'
import { ProductBottomSheet } from 'organisms'
import { RootStackScreenComponent } from 'src/navigation'

import { useHome } from './hook'

export const HomeScreen: RootStackScreenComponent<'Home'> = () => {
  const productRef = useRef<BottomSheetModalTypes>(null)

  const { products, productItem, handleSelectProductItem, handleSearch, isLoading } = useHome({})

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} _contentContainerStyle={{ flexGrow: 1 }}>
        <VStack flex={1} pb={24} pt={6} safeArea space={8} px={6}>
          <Header onSearch={handleSearch} />

          <VStack>
            <Heading fontSize="xl" fontWeight="semibold" lineHeight="md" color="black">
              Catálogo
            </Heading>

            <Text fontSize="md" color="gray.700" mb={4}>
              Encontre o item ideal para você
            </Text>

            {isLoading && (
              <Center py={8}>
                <Spinner />
              </Center>
            )}

            {!products?.length && !isLoading && (
              <Center py={8}>
                <Fallback />
              </Center>
            )}

            <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between">
              {products?.map((item) => (
                <CatalogCard
                  key={item.id}
                  name={item.name}
                  brand={item.brandName}
                  designer={item.designer}
                  nickname={item.nickname}
                  image={item.gridPictureUrl}
                  price={item.retailPriceCents}
                  onPress={() => [productRef.current?.present(), handleSelectProductItem(item)]}
                />
              ))}
            </Flex>
          </VStack>
        </VStack>
      </ScrollView>

      <ProductBottomSheet ref={productRef} data={productItem} />
    </>
  )
}
