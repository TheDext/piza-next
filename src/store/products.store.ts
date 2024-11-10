//@ts-nocheck
import { create } from 'zustand';

const useProducts = create((set) => ({
    products: null,
    setProducts: (products) => set({ products }),
}));

export default useProducts;
