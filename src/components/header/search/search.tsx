'use client';
import classes from './search.module.scss';
import TextField from '@/components/common/textField/textField';
import { useEffect, useState } from 'react';
import { productService } from '@/services/product';
import { useDebounce } from 'react-use';

const Search = () => {
    const [searchRequest, setSearchRequest] = useState('');

    const handleNameChange = (value: string) => {
        setSearchRequest(value);
    };

    useDebounce(
        () => {
            productService(searchRequest).then((data) =>
                console.log('data', data)
            );
        },
        500,
        [searchRequest]
    );

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
