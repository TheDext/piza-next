//@ts-nocheck
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState } from 'react';
import TextField from '@/components/common/textField/textField';
import classes from './rangeSlider.module.scss';

const RangeSlider = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(10);

    useEffect(() => {
        console.log('min', min);
        console.log('max', max);
    }, [min, max]);

    return (
        <div className={classes.rangeSlider}>
            <div className={classes.rangeSlider__input}>
                <TextField
                    placeholder="min"
                    value={min}
                    name="range-min"
                    onChange={setMin}
                    id="range-min"
                />
            </div>
            <div className={classes.rangeSlider__input}>
                <TextField
                    placeholder="max"
                    value={max}
                    name="range-max"
                    onChange={setMax}
                    id="range-max"
                />
            </div>
            <div className={classes.rangeSlider__slider}>
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
            </div>
        </div>
    );
};

export default RangeSlider;
