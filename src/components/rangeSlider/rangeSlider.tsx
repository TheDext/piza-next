//@ts-nocheck
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import TextField from '@/components/common/textField/textField';

const RangeSlider = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    useEffect(() => {
        console.log('min', min);
        console.log('max', max);
    }, [min, max]);

    return (
        <>
            <TextField
                placeholder="min"
                value={min}
                name="range-min"
                onChange={setMin}
            />
            <TextField
                placeholder="max"
                value={max}
                name="range-max"
                onChange={setMax}
            />
            <Slider
                min={0}
                max={10}
                defaultValue={[2, 5]}
                onChange={(e) => {
                    setMin(e[0]);
                    setMax(e[1]);
                }}
                value={[min, max]}
                range
            />
        </>
    );
};

export default RangeSlider;
