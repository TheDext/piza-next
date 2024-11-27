//@ts-nocheck
import classes from './checkbox.module.scss';

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange(name, !value);
    };

    return (
        <div className={classes.checkbox}>
            <input
                className={classes.checkbox__input}
                type="checkbox"
                value={value}
                id={name}
                onChange={handleChange}
                name={name}
            />
            <label className={classes.checkbox__label} htmlFor={name}>
                {children}
            </label>
            {error && <div className={classes.checkbox__error}>{error}</div>}
        </div>
    );
};

export default CheckBoxField;
