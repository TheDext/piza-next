//@ts-nocheck
import classes from './productsList.module.scss';
import ProductCategoryList from '@/components/productCategoryList/productCategoryList';

const ProductsList = ({ categories }) => {
    return (
        <div className={classes.productsList}>
            {categories.map(({ id, name }) => (
                <ProductCategoryList key={id} id={id} name={name} />
            ))}
        </div>
    );
};

export default ProductsList;
