//@ts-nocheck
import pizzaTypes from '@/shared/constants/pizzaTypes';
import classes from './productTypes.module.scss';
import classNames from '../../../shared/lib/classNames';

const ProductTypes = ({ availableTypes }) => {
    console.log('availableTypes', availableTypes);
    const types = Object.keys(pizzaTypes).map((type) => Number(type));
    console.log('types', types);
    return (
        <div className={classes.productTypes}>
            <div className={classes.productTypes__row}>
                {types.map((type) => (
                    <button
                        disabled={!availableTypes.includes(type)}
                        key={type}
                        className={classNames(
                            classes.productTypes__column,
                            {},
                            []
                        )}
                    >
                        {pizzaTypes[type]}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductTypes;
