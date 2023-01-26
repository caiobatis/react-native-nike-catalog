import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { Product } from 'src/services'

type TCartStore = {
  items: Partial<Product | null>[]
}

const initialState = { items: [] }

export const cartStoreAtom = atom<TCartStore>(initialState)

export const useCartStoreAtom = () => useAtom(cartStoreAtom)

export const useCartStoreAtomValue = () => useAtomValue(cartStoreAtom)

export const useSetCartStoreAtom = () => useSetAtom(cartStoreAtom)
