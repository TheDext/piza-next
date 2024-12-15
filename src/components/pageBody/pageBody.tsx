//@ts-nocheck
import ProductsList from '@/components/productsList/productsList';
import classes from './pageBody.module.scss';
import Filters from '@/components/filters/filters';

const PageBody = ({ ingredients, categories }) => {
    return (
        <div className={classes.pageBody}>
            <div className="_container">
                <div className={classes.pageBody__row}>
                    <Filters ingredients={ingredients} />
                    <ProductsList categories={categories} />
                </div>
            </div>
        </div>
    );
};

export default PageBody;
