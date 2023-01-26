import { RootStackScreenComponentProps } from 'src/navigation'
import { Product } from 'src/services'

export type CartProps = Partial<RootStackScreenComponentProps<'Cart'>>

export type UseCart = ({ navigation, route }: Partial<Pick<CartProps, 'navigation' | 'route'>>) => {
  handleCheckout: () => void
  handleRemoveItem: (item: Partial<Product>) => void
  cartItems: Partial<Product | null>[]
}
