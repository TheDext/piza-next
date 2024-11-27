//@ts-nocheck
import Header from '@/components/header/header';
import TopBar from '@/components/topBar/topBar';
import PageBody from '@/components/pageBody/pageBody';
import { categoriesService } from '@/services/categories.service';
import { productService } from '@/services/product.service';

export default async function Home() {
    const categories = await categoriesService.get();
    const products = await productService.getAll();

    return (
        <>
            <Header />
            <main>
                <TopBar categories={categories} />
                <PageBody products={products} />
            </main>
        </>
    );
}
