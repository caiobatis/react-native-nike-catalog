import * as serializer from './serializer'
import { GetProductsParams } from './types'
import client from '../client'

export const getProductList = async (params?: GetProductsParams) =>
  serializer.serializeProductList(await client.get('/catalog', { params }))
