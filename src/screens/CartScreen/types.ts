import { RootStackScreenComponentProps } from 'src/navigation'

export type CartProps = Partial<RootStackScreenComponentProps<'Cart'>>

export type UseCart = ({ navigation, route }: Partial<Pick<CartProps, 'navigation' | 'route'>>) => {
  handleCheckout: () => void
}
