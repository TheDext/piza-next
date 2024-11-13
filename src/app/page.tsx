//@ts-nocheck
import Header from '@/components/header/header';
import { categoriesService } from '@/services/categories.service';
import TopBar from '@/components/topBar/topBar';
import { productService } from '@/services/product.service';
import PageBody from '@/components/pageBody/pageBody';

export default async function Home({ params }) {
    const { categories } = await categoriesService();
    const products = await productService.getAll();
    const { slug } = await params;
    console.log('slug', slug);

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
