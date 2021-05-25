import React, {ChangeEvent, FocusEventHandler} from 'react';
import s from './Input.module.css';

type PropsType = {
    type: string
    placeholder?: string
    value?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
    onBlur?: FocusEventHandler<HTMLInputElement> | undefined
    name?: string
    autoComplete?: string
}

export const Input: React.FC<PropsType> = (props) => {
    return (
        <div>
            <input type={props.type}
                   className={s.input}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.onChange}
                   autoComplete={props.autoComplete}
                   onBlur={props.onBlur}
            />
        </div>
    );
};