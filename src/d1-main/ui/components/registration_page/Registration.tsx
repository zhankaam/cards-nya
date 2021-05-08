import React from 'react';
import s from './../login_page/Login.module.css'
import {RoutePath} from "../../../../App";
import { NavLink } from 'react-router-dom';

export const Registration = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Create your account</h1>
            <div><input type={"text"} className={s.input} placeholder={"email"}/></div>
            <div><input type={"password"} className={s.input} placeholder={"password"}/></div>
            <div><input type={"password"} className={s.input} placeholder={"confirm password"}/></div>
            <div><button  className={s.btn}>Sign Up</button></div>
            <NavLink to={RoutePath.LOGIN}  className={s.routePath}>Log In</NavLink>
        </div>
    );
};

