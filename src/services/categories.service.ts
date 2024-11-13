import httpService from '@/services/http.service';

export const categoriesService = async () => {
    const { data } = await httpService.get(`/api/categories`);
    return data;
};
