export type Product = {
  boxCondition: string
  brandName: string
  color: string
  designer: string
  details: string
  gridPictureUrl: string
  id: number
  midsole: string
  name: string
  nickname: string
  originalPictureUrl: string
  retailPriceCents: number
  shoeCondition: string
  silhouette: string
  sku: string
  slug: string
  status: string
  storyHtml: string
}

export type GetProductsParams = {
  search?: string
}
