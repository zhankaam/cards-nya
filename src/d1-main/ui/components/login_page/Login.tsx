import React, {ChangeEvent, ChangeEventHandler, MouseEventHandler, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Login.module.css'
import {RoutePath} from "../../../../App";
import { useDispatch } from 'react-redux';
import {useTypedSelector} from "../../../bll/store";

export const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isAuth = useTypedSelector(state => state.login.isAuth)
    const status = useTypedSelector(state => state.app.status)
    const dispatch = useDispatch()

    const sendEmailHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendPasswordHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const sendRememberMeHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    if(isAuth){
        return <Redirect to={RoutePath.HOME_PAGE}/>
    }

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Login</h1>
            <div>
                <input type={"text"}
                       className={s.input}
                       placeholder={"email"}
                       value={email}
                       onChange={sendEmailHandler}
                /></div>
            <div>
                <input type={"password"}
                       className={s.input}
                       placeholder={"password"}
                       value={password}
                       onChange={sendPasswordHandler}
                />
            </div>
            <div>
                <input type={"checkbox"}
                       className={s.checkbox}
                       checked={rememberMe}
                       onChange={sendRememberMeHandler}
                />
            </div>
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
