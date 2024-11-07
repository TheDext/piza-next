import httpService from '@/services/http.service';

export const productService = async (query: string) => {
    const products = await httpService.get(
        `/api/products/search?product=${query}`
    );
    return products;
};
