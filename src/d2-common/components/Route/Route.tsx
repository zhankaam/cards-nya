import React from 'react';
import {NavLink} from 'react-router-dom';
import s from "./Route.module.css";

type PropsType = {
    to: string
    text: string
}

export const Route: React.FC<PropsType> = (props) => {
    return (
        <NavLink to={props.to} className={s.routePath}>{props.text}</NavLink>
    );
};
