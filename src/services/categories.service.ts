import httpService from '@/services/http.service';

export const categoriesService = {
    get: async () => {
        const { data } = await httpService.get(`/api/categories`);
        return data?.categories;
    },
};
