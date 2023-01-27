import { useState } from 'react'

import { Toast } from 'atoms'
import { useToast } from 'native-base'
import { Product, useGetProductList } from 'services'

import { UseHome } from './types'

export const useHome: UseHome = () => {
  const [search, setSearch] = useState<string>()

  const toast = useToast()

  const handleError = () => {
    toast.show({
      render: () => <Toast type="error" text="Encontramos um problema na API, sorry" />
    })
  }

  const { isLoading, data: response } = useGetProductList({ search }, handleError)

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
