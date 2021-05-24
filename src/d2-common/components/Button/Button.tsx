import React from 'react';
import s from "../../../d1-main/ui/components/login_page/Login.module.css";

type PropsType = {
    text: string
    onClick: () => void
    disabled: boolean
}

export const Button: React.FC<PropsType> = (props) => {

    return (
        <div>
            <button className={s.btn} onClick={props.onClick} disabled={props.disabled}>{props.text}</button>
        </div>
    );
};
