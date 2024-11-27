//@ts-nocheck
'use client';
import classes from './topBar.module.scss';
import Categories from '@/components/categories/categories';
import { useRef, useState } from 'react';
import classNames from '@/shared/lib/classNames';
import { useIntersection } from 'react-use';

const TopBar = ({ categories }) => {
    const [currentCategory, setCurrentCategory] = useState('Все');
    const intersectionRef = useRef(null);

    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '130px',
        threshold: 1,
    });
    const stick = !intersection?.isIntersecting;

    return (
        <div
            ref={intersectionRef}
            className={classNames(
                classes.topBar,
                { [classes.sticky]: stick },
                []
            )}
        >
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
