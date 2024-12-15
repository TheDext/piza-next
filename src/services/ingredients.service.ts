import httpService from '@/services/http.service';

export const ingredientsService = {
    get: async () => {
        const { data } = await httpService.get(`/api/ingredients`);
        return data?.ingredients;
    },
};
