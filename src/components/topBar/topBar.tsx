//@ts-nocheck
'use client';
import classes from './topBar.module.scss';
import Categories from '@/components/categories/categories';
import { useState } from 'react';
import classNames from '@/shared/lib/classNames';

const TopBar = ({ categories }) => {
    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div className={classNames(classes.topBar, {}, [])}>
            <div className="_container">
                <div className={classes.topBar__title}>
                    {currentCategory.name}
                </div>
                <div className={classes.topBar__row}>
                    <Categories
                        currentCategoryId={currentCategory.id}
                        onSetCurrenCategory={setCurrentCategory}
                        categories={categories}
                    />
                    <div>СОРТИРОВКА V</div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
