import { useState } from 'react'

import { Product, useGetProductList } from 'services'

import { UseHome } from './types'

export const useHome: UseHome = () => {
  const [search, setSearch] = useState<string>()

  const { isLoading, data: response } = useGetProductList({ search })

  const [productItem, setProductItem] = useState<Product | null>(null)

  const handleSelectProductItem = setProductItem

  const handleSearch = setSearch

  return {
    isLoading,
    productItem,
    handleSearch,
    products: response?.data,
    handleSelectProductItem
  }
}
