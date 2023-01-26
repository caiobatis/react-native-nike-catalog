import { RootStackScreenComponentProps } from 'src/navigation'
import { Product } from 'src/services'

export type HomeProps = Partial<RootStackScreenComponentProps<'Home'>>

export type UseHome = ({ navigation, route }: Partial<Pick<HomeProps, 'navigation' | 'route'>>) => {
  products?: Product[]
}
