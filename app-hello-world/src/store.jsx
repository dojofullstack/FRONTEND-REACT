import { create } from 'zustand'




const useStoreDojo = create((set) => (
    {
        cart: [],
        products: [],
        profileUser: {},
        updateCart: (data) => set({ cart: data }),
        updateProfileUser: (data) => set({ profileUser: data }),
    }
))

export default useStoreDojo;