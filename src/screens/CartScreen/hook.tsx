import { Toast } from 'atoms'
import { useToast } from 'native-base'

import { UseCart } from './types'

export const useCart: UseCart = () => {
  const toast = useToast()

  const handleCheckout = () => {
    toast.show({
      render: () => <Toast type="warning" text="Isso é tudo, pessoal!" />
    })
  }

  return {
    handleCheckout
  }
}
