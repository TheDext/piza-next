//@ts-nocheck
import classes from './productSizes.module.scss';
import classNames from '@/shared/lib/classNames';
import { pizzaSizes } from '@/shared/constants';

const ProductSizes = ({ activeSize, setActiveSize }) => {
    return (
        <div className={classes.productSizes}>
            {Object.keys(pizzaSizes).map((size) => {
                return (
                    <button
                        key={size}
                        className={classNames(
                            classes.productSizes__size,
                            {
                                [classes._checked]:
                                    Number(size) === Number(activeSize),
                            },
                            []
                        )}
                        onClick={() => setActiveSize(size)}
                    >
                        {pizzaSizes[size]}
                    </button>
                );
            })}
        </div>
    );
};

export default ProductSizes;
