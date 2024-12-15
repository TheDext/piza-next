//@ts-nocheck
import httpService from '@/services/http.service';

export const productService = {
    get: async () => {
        const { data } = await httpService.get('/api/products');
        return data;
    },
    search: async (query: string) => {
        const { data } = await httpService.get(
            `/api/products/search?product=${query}`
        );
        return data;
    },
    getById: async (id) => {
        const { data } = await httpService.get(
            `/api/products/byProductId/${id}`
        );
        return data;
    },
    getProductsByCategoryId: async (categoryId) => {
        const { data } = await httpService.get(
            `/api/products/byCategoryId/${categoryId}`
        );
        return data;
    },
};
