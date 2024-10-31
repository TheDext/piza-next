import { FC, SVGProps } from 'react';
import { ButtonProps } from '@/components/common/button/button.props';
import classes from './button.module.scss';

const Button: FC<ButtonProps> = ({ kind, children }) => {
    return <button className={classes[kind]}> {children}</button>;
};

export default Button;
