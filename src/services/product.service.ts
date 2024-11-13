//@ts-nocheck
import httpService from '@/services/http.service';

export const productService = {
    getAll: async () => {
        const { data } = await httpService.get('/api/products');
        return data;
    },
    search: async (query: string) => {
        const { data } = await httpService.get(
            `/api/products/search?product=${query}`
        );
        return data;
    },
};
