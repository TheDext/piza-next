//@ts-nocheck
'use client';
import { useEffect, useState } from 'react';

const useChooseProduct = ({
    ingredients,
    categoryId,
    imageUrl,
    items,
    name,
}) => {
    const [activeProductId, setActiveProductId] = useState(items[0].id);
    const [activeSize, setActiveSize] = useState(
        items.find(({ id }) => id === activeProductId).size
    );
    const [activeType, setActiveType] = useState(
        items.find(({ id }) => id === activeProductId).pizzaType
    );
    const [price] = useState(
        items.find(({ id }) => id === activeProductId).price
    );

    const sizesAndTypes = items.reduce((acc, { size, pizzaType }) => {
        if (!acc[size]) {
            acc[size] = [];
        }

        acc[size].push(pizzaType);

        return acc;
    }, {});

    const availableTypes = sizesAndTypes[activeSize];

    useEffect(() => {
        if (
            !items.find(
                (i) => i.size === activeSize && i.pizzaType === activeType
            )
        ) {
            setActiveType(items.find((i) => i.size === activeSize).pizzaType);
        }
    }, [activeSize]);

    // //temp
    useEffect(() => {
        console.log(
            'setActiveID',
            items.filter(
                (item) =>
                    item.size === activeSize && item.pizzaType === activeType
            )
        );
    }, [activeSize, activeType]);
    // //      /temp

    return {
        availableTypes,
        activeSize,
        activeType,
        setActiveSize,
        setActiveType,
        setActiveProductId,
        ingredients,
        categoryId,
        imageUrl,
        items,
        name,
        price,
    };
};

export default useChooseProduct;

// //@ts-nocheck
// 'use client';
// import { useEffect, useState } from 'react';
//
// const useChooseProduct = ({
//     ingredients,
//     categoryId,
//     imageUrl,
//     items,
//     name,
// }) => {
//     const [activeSize, setActiveSize] = useState(items[0].size);
//     const [activeType, setActiveType] = useState(
//         items.find((i) => i.size === activeSize).pizzaType
//     );
//
//     //temp
//     const [activeProductId, setActiveProductId] = useState(items[0].id);
//     console.log('items', items);
//     console.log('activeProductId', activeProductId);
//     // console.log(items.find((i) => i.id === activeProductId));
//     //      /temp
//     const sizesAndTypes = items.reduce((acc, { size, pizzaType }) => {
//         if (!acc[size]) {
//             acc[size] = [];
//         }
//
//         acc[size].push(pizzaType);
//
//         return acc;
//     }, {});
//     const availableTypes = sizesAndTypes[activeSize];
//     useEffect(() => {
//         if (
//             !items.find(
//                 (i) => i.size === activeSize && i.pizzaType === activeType
//             )
//         ) {
//             setActiveType(items.find((i) => i.size === activeSize).pizzaType);
//         }
//     }, [activeSize]);
//
//     //temp
//     useEffect(() => {
//         console.log('activeSize:', activeSize, '| activeType:', activeType);
//         console.log(
//             'setActiveID',
//             items.filter(
//                 (item) =>
//                     item.size === activeSize && item.pizzaType === activeType
//             )
//         );
//     }, [activeSize, activeType]);
//     //      /temp
//     return {
//         availableTypes,
//         activeSize,
//         activeType,
//         setActiveSize,
//         setActiveType,
//         setActiveProductId,
//         ingredients,
//         categoryId,
//         imageUrl,
//         items,
//         name,
//     };
// };
//
// export default useChooseProduct;
