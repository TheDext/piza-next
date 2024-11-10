import httpService from '@/services/http.service';

export const productService = async (query: string) => {
    console.log('query', query);
    const { data } = await httpService.get(
        `/api/products/search?product=${query}`
    );
    return data;
};
