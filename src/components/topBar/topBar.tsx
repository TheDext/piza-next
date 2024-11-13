//@ts-nocheck
'use client';
import classes from './topBar.module.scss';
import Categories from '@/components/categories/categories';
import { useState } from 'react';

const TopBar = ({ categories }) => {
    const [currentCategory, setCurrentCategory] = useState('Все');

    return (
        <div className={classes.topBar}>
            <div className="_container">
                <div className={classes.topBar__title}>{currentCategory}</div>
                <div className={classes.topBar__row}>
                    <Categories
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
