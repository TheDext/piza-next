//@ts-nocheck
'use client';
import { useEffect, useState } from 'react';

const useChooseProduct = (product) => {
    const [activeSize, setActiveSize] = useState(product?.items[0].size);
    const [activeType, setActiveType] = useState(product?.items[0].pizzaType);

    console.log(product);
    console.log(activeSize);

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
        activeType,
        setActiveSize,
        setActiveType,
    };
};

export default useChooseProduct;
