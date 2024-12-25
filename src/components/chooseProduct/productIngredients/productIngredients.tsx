//@ts-nocheck
'use client';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import classes from '@/components/chooseProduct/chooseProduct.module.scss';
import classNames from '@/shared/lib/classNames';
import { useState } from 'react';

const ProductIngredients = ({ ingredients }) => {
    const [activeIngredient, setActiveIngredient] = useState(null);

    return (
        <OverlayScrollbarsComponent
            options={{
                scrollbars: {
                    clickScrolling: true, // Включить прокрутку кликом мыши
                    minSize: 20,
                },
            }}
        >
            <div className={classes.product__ingredients}>
                <div className={classes.product__ingredientsTitle}>
                    Интредиенты
                </div>
                <div className={classes.product__ingredientsItems}>
                    {ingredients.map(({ id, name, price, imageUrl }) => (
                        <div
                            className={classNames(
                                classes.productIngredient,
                                {
                                    [classes._checked]: activeIngredient === id,
                                },
                                []
                            )}
                            key={id}
                            onClick={() => setActiveIngredient(id)}
                        >
                            <div className={classes.productIngredient__img}>
                                <img src={imageUrl} alt="food" />
                            </div>
                            <div className={classes.productIngredient__name}>
                                {name}
                            </div>
                            <div className={classes.productIngredient__price}>
                                {price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </OverlayScrollbarsComponent>
    );
};

export default ProductIngredients;
