'use client';
import classes from './search.module.scss';
import TextField from '@/components/common/textField/textField';
import { useState } from 'react';

const Search = () => {
    const [searchRequest, setSearchRequest] = useState('');

    const handleNameChange = (value: string) => {
        setSearchRequest(value);
    };

    return (
        <div className={classes.search}>
            <TextField
                placeholder="Поиск пиццы..."
                value={searchRequest}
                name="search"
                onChange={handleNameChange}
            />
        </div>
    );
};

export default Search;
