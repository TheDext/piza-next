//@ts-nocheck
'use client';
import classes from './categories.module.scss';
import { useState } from 'react';
import classNames from '@/shared/lib/classNames';
import Link from 'next/link';

const Categories = ({ categories, onSetCurrenCategory }) => {
    const [checked, setChecked] = useState(1);
    console.log(categories);
    return (
        <div className={classes.categories}>
            <nav className={classes.categories__list}>
                {categories.map(({ id, name }) => (
                    <Link
                        className={classNames(
                            classes.categories__item,
                            { [classes._checked]: checked === id },
                            []
                        )}
                        key={id}
                        onClick={() => {
                            id !== checked && setChecked(id);
                            onSetCurrenCategory(name);
                        }}
                        href={`/#${name}`}
                    >
                        {name}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Categories;
