//@ts-nocheck
import classes from './productsList.module.scss';
import ProductCard from '@/components/productCard/productCard';

const ProductsList = ({ products }) => {
    const filteredProductsList = [...products];

    return (
        <div className={classes.productsList}>
            {filteredProductsList.map(({ id, name, imageUrl }) => (
                <div className={classes.productsListColumn}>
                    <ProductCard name={name} id={id} imageUrl={imageUrl} />
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
