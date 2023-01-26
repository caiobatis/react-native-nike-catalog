import { AxiosError, AxiosResponse } from 'axios'
import { useQuery } from 'react-query'

import * as requests from './requests'
import { Product } from './types'
import { ResponseError } from '../types'

export const useGetProductList = () =>
  useQuery<AxiosResponse<Product[]>, AxiosError<ResponseError>>(
    'getProductList',
    requests.getProductList
  )
