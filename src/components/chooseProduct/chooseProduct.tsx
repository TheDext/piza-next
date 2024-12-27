//@ts-nocheck
'use client';
import classes from './chooseProduct.module.scss';
import classNames from '../../shared/lib/classNames';
import ProductImage from '@/components/chooseProduct/productImage/productImage';
import useChooseProduct from '@/shared/hooks/useChooseProduct';
import ProductIngredients from '@/components/chooseProduct/productIngredients/productIngredients';
import ProductSizes from '@/components/chooseProduct/productSizes/productSizes';
import ProductTypes from '@/components/chooseProduct/productTypes/productTypes';

const ChooseProduct = ({ product }) => {
    const {
        availableTypes,
        activeSize,
        activeType,
        setActiveSize,
        setActiveType,
        setActiveProductId,
        ingredients,
        categoryId,
        imageUrl,
        items,
        name,
        price,
    } = useChooseProduct(product);

    return (
        <div className={classes.product}>
            <div className="_container">
                <div className={classes.product__row}>
                    <div className={classes.product__column}>
                        <ProductImage imageUrl={imageUrl} />
                    </div>

                    <div
                        className={classNames(classes.product__column, {}, [
                            classes._info,
                        ])}
                    >
                        <div className={classes.product__info}>
                            <div className={classes.product__name}>{name}</div>
                            <div>{price} $</div>
                            <ProductSizes
                                activeSize={activeSize}
                                setActiveSize={setActiveSize}
                            />
                            <ProductTypes
                                availableTypes={availableTypes}
                                activeType={activeType}
                                setActiveType={setActiveType}
                            />
                            <ProductIngredients ingredients={ingredients} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseProduct;
