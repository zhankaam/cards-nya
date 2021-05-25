import React from 'react';
import s from './Button.module.css'

type PropsType = {
    text: string
    onClick: () => void
    disabled: boolean
    type?: string
}

export const Button: React.FC<PropsType> = (props) => {

    return (
        <div>
            <button className={s.btn} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
        </div>
    );
};
