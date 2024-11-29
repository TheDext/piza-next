//@ts-nocheck
'use client';
import { useState } from 'react';
import CheckBoxField from '@/components/common/checkbox/checkbox';
import RangeSlider from '@/components/rangeSlider/rangeSlider';
import classes from './filters.module.scss';

const Filters = () => {
    const [state, setState] = useState({
        this: false,
        andThis: false,
    });

    const handleChange = (key, value) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <>
            <CheckBoxField
                name="this"
                value={state.this}
                onChange={handleChange}
            >
                Это
            </CheckBoxField>
            <CheckBoxField
                name="andThis"
                value={state.this}
                onChange={handleChange}
            >
                Или это
            </CheckBoxField>
            <RangeSlider />
        </>
    );
};

export default Filters;
