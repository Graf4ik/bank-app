import {
    Input as AntdInput,
    InputProps as AntdInputProps,
    InputRef,
} from 'antd';
import { FC, Ref } from 'react';

export interface InputProps extends AntdInputProps {
    className?: string;
    type?: string;
    placeholder?: string;
    inputRef?: Ref<InputRef>;
}

export const Input: FC<InputProps> = (props) => {
    const {
        className, placeholder, inputRef, type, ...otherProps
    } = props;

    return (
        <AntdInput
            className={className}
            ref={inputRef}
            type={type}
            placeholder={placeholder}
            {...otherProps}
        />
    );
};