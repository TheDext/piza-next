//@ts-nocheck
import { productService } from '@/services/product.service';
import classes from './productCategoryList.module.scss';
import ProductCard from '@/components/productCard/productCard';
import Link from 'next/link';

const ProductCategoryList = async ({ name, id }) => {
    const { data } = await productService.getProductsByCategoryId(id);
    console.log(id);

    return (
        <div id={name} className={classes.productGroup}>
            <div className={classes.productGroup__title}>{name}</div>
            <div className={classes.productGroup__list}>
                {data.map(({ name, id, imageUrl }) => (
                    <div key={id} className={classes.productGroup__column}>
                        <Link href={`/product/${id}`}>
                            <ProductCard
                                name={name}
                                id={id}
                                imageUrl={imageUrl}
                                price={500}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ProductCategoryList;
