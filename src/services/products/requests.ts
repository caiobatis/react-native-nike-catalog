import * as serializer from './serializer'
import client from '../client'

export const getProductList = async () =>
  serializer.serializeProductList(await client.get('/catalog'))
