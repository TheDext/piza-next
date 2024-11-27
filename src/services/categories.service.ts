import httpService from '@/services/http.service';

const categoriesService = {
    get: async () => {
        const { data } = await httpService.get(`/api/categories`);
        return data?.categories;
    },
};

export { categoriesService };
