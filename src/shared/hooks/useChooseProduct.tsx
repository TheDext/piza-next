//@ts-nocheck
'use client';
import { useEffect, useState } from 'react';

const useChooseProduct = (product) => {
    const [activeSize, setActiveSize] = useState(product?.items[0].size);

    const sizesAndTypes = product?.items.reduce((acc, { size, pizzaType }) => {
        if (!acc[size]) {
            acc[size] = [];
        }

        acc[size].push(pizzaType);

        return acc;
    }, {});
    const availableTypes = sizesAndTypes[activeSize];

    return {
        availableTypes,
        activeSize,
        setActiveSize,
    };
};

export default useChooseProduct;
