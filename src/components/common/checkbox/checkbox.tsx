//@ts-nocheck
import classes from './checkbox.module.scss';
import { Check } from 'lucide-react';

const CheckBoxField = ({
    name,
    value,
    onChange,
    children,
    error,
    id,
    checked = null,
}) => {
    const handleChange = () => {
        onChange(name, value);
    };

    return (
        <div className={classes.checkbox}>
            <input
                className={classes.checkbox__input}
                type="checkbox"
                value={value}
                id={id}
                onChange={handleChange}
                name={name}
                checked={checked}
            />
            <label className={classes.checkbox__label} htmlFor={id}>
                <span>
                    <Check />
                </span>
                {children}
            </label>

            {error && <div className={classes.checkbox__error}>{error}</div>}
        </div>
    );
};

export default CheckBoxField;
