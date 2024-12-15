//@ts-nocheck
import TopBar from '@/components/topBar/topBar';
import PageBody from '@/components/pageBody/pageBody';
import { categoriesService } from '@/services/categories.service';
import { ingredientsService } from '@/services/ingredients.service';

export default async function Home() {
    const categories = await categoriesService.get();
    const ingredients = await ingredientsService.get();

    return (
        <>
            <TopBar categories={categories} />
            <PageBody ingredients={ingredients} categories={categories} />
        </>
    );
}
