//@ts-nocheck
'use client';
import { useEffect, useState } from 'react';
import CheckBoxField from '@/components/common/checkbox/checkbox';
import RangeSlider from '@/components/rangeSlider/rangeSlider';
import classes from './filters.module.scss';
import Ingredients from '@/components/ingredients/ingredients';
import qs from 'qs';

const Filters = ({ ingredients }) => {
    const [filter, setFilter] = useState({
        dough: [],
        sizes: [],
        price: [],
        ingredients: [],
    });

    const handleChange = (key, value) => {
        if (key === 'price') {
            setFilter((prevState) => ({ ...prevState, [key]: value }));
            return;
        }

        setFilter((prevState) => ({
            ...prevState,
            [key]: prevState[key].includes(value)
                ? prevState[key].filter((item) => item !== value)
                : [...prevState[key], value],
        }));
    };

    return (
        <div className={classes.filters}>
            <div className={classes.filters__title}>Фильтрация</div>

            <div className={classes.filters__group}>
                <div className={classes.filters__subtitle}>Тип теста</div>
                <CheckBoxField
                    name="dough"
                    value="тонкое"
                    onChange={handleChange}
                    id="dough1"
                >
                    Тонкое
                </CheckBoxField>
                <CheckBoxField
                    name="dough"
                    value="толстое"
                    onChange={handleChange}
                    id="dough2"
                >
                    Традиционное
                </CheckBoxField>
            </div>

            <div className={classes.filters__group}>
                <div className={classes.filters__subtitle}>Цена от и до, ₽</div>
                <RangeSlider onChange={handleChange} />
            </div>

            <div className={classes.filters__group}>
                <div className={classes.filters__subtitle}>Размеры</div>
                <CheckBoxField
                    name="sizes"
                    value={20}
                    onChange={handleChange}
                    id="20"
                >
                    20
                </CheckBoxField>
                <CheckBoxField
                    name="sizes"
                    value={30}
                    onChange={handleChange}
                    id="30"
                >
                    30
                </CheckBoxField>
            </div>

            <div className={classes.filters__group}>
                <div className={classes.filters__subtitle}>Ингредиенты</div>
                <Ingredients
                    onChange={handleChange}
                    ingredients={ingredients}
                    checkedIngredients={filter.ingredients}
                />
            </div>
        </div>
    );
};

export default Filters;
