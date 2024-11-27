//@ts-nocheck
import { create } from 'zustand';

const useCategories = create((set) => ({
    categories: null,
    categoriesLoading: false,
    setCategories: (categories) => set({ categories }),
    setCategoriesLoading: (status) =>
        set(() => ({ categoriesLoading: status })),
}));

export default useCategories;
