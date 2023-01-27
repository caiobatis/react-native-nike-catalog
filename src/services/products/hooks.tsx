import { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import * as requests from './requests'
import { GetProductsParams, Product } from './types'
import { ResponseError } from '../types'

export const useGetProductList = (params: GetProductsParams, onError: () => void) =>
  useQuery<AxiosResponse<Product[]>, AxiosError<ResponseError>>(
    ['getProductList', params.search],
    () => requests.getProductList(params),
    {
      onError
    }
  )
