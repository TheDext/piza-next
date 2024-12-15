//@ts-nocheck
'use client';
import classes from './searchInput.module.scss';
import TextField from '@/components/common/textField/textField';
import { useState } from 'react';
import { productService } from '@/services/product.service';
import { useDebounce } from 'react-use';
import useProducts from '@/store/products.store';
import classNames from '@/shared/lib/classNames';
import useUiActions from '@/store/uiActions.store';
import { X } from 'lucide-react';

const SearchInput = () => {
    const [searchRequest, setSearchRequest] = useState('');
    const { setProducts, setProductsLoading } = useProducts();
    const { blured, setBlured } = useUiActions();

    const handleChange = (value: string) => setSearchRequest(value);

    useDebounce(
        () => {
            if (searchRequest) {
                setProductsLoading(true);

                productService
                    .search(searchRequest)
                    .then(({ data }) => {
                        setProducts(data);
                        setProductsLoading(false);
                    })
                    .catch((e) => {
                        console.log(e);
                        throw e;
                    });
            }
        },
        500,
        [searchRequest]
    );

    return (
        <>
            <div
                className={classNames(
                    classes.searchInput,
                    { [classes.blured]: blured },
                    []
                )}
                onFocus={() => setBlured(true)}
            >
                <TextField
                    placeholder="Поиск пиццы..."
                    value={searchRequest}
                    name="searchInput"
                    onChange={handleChange}
                    id="search"
                />

                <X
                    className={classes.searchInput__clean}
                    onClick={() => setSearchRequest('')}
                />
            </div>

            {blured && <div className={classes.blur}></div>}
        </>
    );
};

export default SearchInput;
