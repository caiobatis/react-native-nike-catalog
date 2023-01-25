import { RootStackScreenComponentProps } from 'src/navigation'

export type CartProps = RootStackScreenComponentProps<'Cart'>

export type UseCart = ({ navigation, route }: Pick<CartProps, 'navigation' | 'route'>) => {
  handleCheckout: () => void
}
