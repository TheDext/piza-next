//@ts-nocheck
import ProductsList from '@/components/productsList/productsList';
import classes from './pageBody.module.scss';
import Filters from '@/components/filters/filters';

const PageBody = ({ products }) => {
    return (
        <div className={classes.pageBody}>
            <div className="_container">
                <div className={classes.pageBody__row}>
                    <div className={classes.pageBody__filters}>
                        <Filters />
                    </div>
                    <ProductsList products={products} />
                </div>
            </div>
        </div>
    );
};

export default PageBody;
