import { create } from 'zustand'

const useStore = create((set) => ({
  products: [],
  updateProducts: (data) => set({ products: data }),
  profileUser: {}
}))


export default useStore;