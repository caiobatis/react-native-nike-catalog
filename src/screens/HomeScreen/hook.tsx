import { useGetProductList } from 'services'

import { UseHome } from './types'

export const useHome: UseHome = () => {
  const { isLoading, data: response } = useGetProductList()

  return {
    isLoading,
    products: response?.data
  }
}
