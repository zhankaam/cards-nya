import React, {ChangeEvent} from 'react';
import s from './Input.module.css';

type PropsType = {
    type: string
    placeholder?: string
    value?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
}

export const Input: React.FC<PropsType> = (props) => {
    return (
        <div>
            <input type={props.type}
                   className={s.input}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.onChange}
            />
        </div>
    );
};