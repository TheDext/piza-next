//@ts-nocheck
import classes from './categories.module.scss';
import classNames from '@/shared/lib/classNames';
import Link from 'next/link';

const Categories = ({ currentCategoryId, categories, onSetCurrenCategory }) => {
    return (
        <div className={classes.categories}>
            <nav className={classes.categories__list}>
                {categories.map(({ id, name }) => (
                    <Link
                        className={classNames(
                            classes.categories__item,
                            { [classes._checked]: currentCategoryId === id },
                            []
                        )}
                        key={id}
                        onClick={() => {
                            onSetCurrenCategory({ id, name });
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
