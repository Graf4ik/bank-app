import { FC, ReactNode } from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

export interface ButtonProps extends Omit<AntdButtonProps, 'onClick'> {
    className?: string;
    children?: ReactNode;
    text?: string;
    size?: SizeType;
    disabled?: boolean;
    key?: string | number;
    onClick?: (() => void) | undefined;
    type?: string;
}

export const Button:FC<ButtonProps> = (props) => {
    const {
        onClick, text, type, ...rest
    } = props;
    return (
        <AntdButton onClick={onClick} type={type} {...rest}>{text}</AntdButton>
    );
};
