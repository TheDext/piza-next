//@ts-nocheck
'use client';
import React, { FC } from 'react';
import { TextFieldProps } from '@/components/common/textField/textField.props';
import classes from './textField.module.scss';

const InputField: FC<TextFieldProps> = ({
    type = 'text',
    placeholder = 'Введите текст',
    label = null,
    name,
    onChange,
    value,
    id,
    ...props
}) => {
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        onChange(target.value);
    };

    return (
        <>
            <div className={classes.textField}>
                {label && <label htmlFor="input">{label}</label>}
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    onChange={handleChange}
                    autoComplete="off"
                    {...props}
                />
            </div>
        </>
    );
};

export default InputField;
