//@ts-nocheck
import CheckBoxField from '@/components/common/checkbox/checkbox';
import { useState } from 'react';
import classes from './ingredients.module.scss';

import classNames from '@/shared/lib/classNames';
import TextField from '@/components/common/textField/textField';

const Ingredients = ({ checkedIngredients, onChange, ingredients }) => {
    const [showAll, setShowAll] = useState(false);
    const [search, setSearch] = useState('');

    const filteredList = ingredients.filter(({ name }) =>
        name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div
            className={classNames(
                classes.ingredients,
                { [classes._showAll]: showAll },
                []
            )}
        >
            <div className={classes.ingredients__search}>
                <TextField
                    placeholder={'Поиск...'}
                    value={search}
                    name={search}
                    onChange={setSearch}
                />
            </div>
            <div className={classes.ingredients__list}>
                {filteredList.map(({ id, name }) => (
                    <CheckBoxField
                        key={id}
                        id={id}
                        name={'ingredients'}
                        value={id}
                        onChange={onChange}
                        checked={checkedIngredients.includes(id)}
                    >
                        {name}
                    </CheckBoxField>
                ))}
            </div>
            {filteredList.length > 4 && (
                <button
                    className={classes.ingredients__btn}
                    onClick={() => setShowAll((prevState) => !prevState)}
                >
                    {showAll ? '- Скрыть' : '+ Показать всё'}
                </button>
            )}
        </div>
    );
};

export default Ingredients;
