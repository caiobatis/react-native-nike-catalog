import { AxiosResponse } from 'axios'

import { Product } from './types'

export const serializeProduct = (product: Product): Product => ({
  boxCondition: product.boxCondition,
  brandName: product.brandName,
  color: product.color,
  designer: product.designer,
  details: product.details,
  gridPictureUrl: product.gridPictureUrl,
  id: product.id,
  midsole: product.midsole,
  name: product.name,
  nickname: product.nickname,
  originalPictureUrl: product.originalPictureUrl,
  retailPriceCents: product.retailPriceCents,
  shoeCondition: product.shoeCondition,
  silhouette: product.silhouette,
  sku: product.sku,
  slug: product.slug,
  status: product.status,
  storyHtml: product.storyHtml
})

export const serializeProductList: (
  response: AxiosResponse<Product[]>
) => AxiosResponse<Product[]> = (response) => ({
  ...response,
  data: response.data.map((item) => serializeProduct(item))
})
