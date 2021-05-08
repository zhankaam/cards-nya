import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Login.module.css'
import {RoutePath} from "../../../../App";

export const Login = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Login</h1>
            <div><input type={"text"} className={s.input} placeholder={"email"}/></div>
            <div><input type={"password"} className={s.input} placeholder={"password"}/></div>
            <div><input type={"checkbox"} className={s.checkbox}/></div>
            <div>
                <button className={s.btn}>Sign In</button>
            </div>
            <NavLink to={RoutePath.FORGOT_PASSWORD} className={s.routePath}>Forgot Password? </NavLink>
            <div>
                <NavLink to={RoutePath.REGISTRATION}
                         className={s.routePath}>Don't have an account?Sign Up </NavLink>
            </div>
        </div>
    );
};
