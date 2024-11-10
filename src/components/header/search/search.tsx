//@ts-nocheck
'use client';
import SearchInput from '@/components/header/searchInput/searchInput';
import SearchResult from '@/components/header/searchResult/searchResult';
import classes from './search.module.scss';
import { useClickAway } from 'react-use';
import { useRef } from 'react';
import useUiActions from '@/store/uiActions.store';

const Search = () => {
    const ref = useRef(null);
    const { setBlured } = useUiActions();

    useClickAway(ref, () => {
        setBlured(false);
    });

    return (
        <div className={classes.search} ref={ref}>
            <SearchInput />
            <SearchResult />
        </div>
    );
};

export default Search;
