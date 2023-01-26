import { Toast } from 'atoms'
import { useToast } from 'native-base'
import { Product } from 'services'
import { useCartStoreAtomValue, useSetCartStoreAtom } from 'src/store/cart'

import { UseCart } from './types'

export const useCart: UseCart = () => {
  const toast = useToast()

  const { items: cartItems } = useCartStoreAtomValue()

  const setCartStore = useSetCartStoreAtom()

  const handleCheckout = () => {
    toast.show({
      render: () => <Toast type="warning" text="Isso é tudo, pessoal!" />
    })
  }

  const handleRemoveItem = (item: Partial<Product>) => {
    setCartStore({ items: [...cartItems.filter((product) => product?.id !== item?.id)] })

    toast.show({
      render: () => <Toast type="success" text={`${item.brandName} ${item.nickname} removido`} />
    })
  }

  return { handleRemoveItem, handleCheckout, cartItems }
}
