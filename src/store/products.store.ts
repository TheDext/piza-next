//@ts-nocheck
import { create } from 'zustand';

const useProducts = create((set) => ({
    products: null,
    productsLoading: false,
    setProducts: (products) => set({ products }),
    setProductsLoading: (status) => set(() => ({ productsLoading: status })),
}));

export default useProducts;
