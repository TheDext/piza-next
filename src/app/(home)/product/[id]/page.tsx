//@ts-nocheck
import { productService } from '@/services/product.service';

const Product = async ({ params }) => {
    const { id } = await params;

    const { data } = await productService.getById(id);

    console.log('data', data);

    return 'product Page';
};
export default Product;
