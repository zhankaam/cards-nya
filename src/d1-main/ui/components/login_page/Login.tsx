import React, {ChangeEvent, useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import s from './Login.module.css'
import {RoutePath} from "../../../../App";
import {useDispatch} from 'react-redux';
import {useTypedSelector} from "../../../bll/store";
import {loginTC} from "../../../bll/reducers/login-reducer";
import {Title} from "../../../../d2-common/components/Title/Title";
import {Input} from "../../../../d2-common/components/Input/Input";
import {Button} from "../../../../d2-common/components/Button/Button";

export const Login = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isAuth = useTypedSelector(state => state.login.isAuth)
    const status = useTypedSelector(state => state.app.status)

    const dispatch = useDispatch()
    const regData = {email, password, rememberMe}

    const sendEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const sendRememberMeHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    const sendData = () => dispatch(loginTC({regData}))

    if(isAuth){
        return <Redirect to={RoutePath.HOME_PAGE}/>
    }

    return (
        <div className={s.wrapper}>
            <Title text="Login"/>
            <Input type="text" value={email} placeholder="email" onChange={sendEmailHandler}/>
            <Input type="password" value={password} placeholder="password" onChange={sendPasswordHandler}/>
            <Input type="checkbox" checked={rememberMe} onChange={sendRememberMeHandler}/>
            <Button text="Sign In" disabled={status === "loading"} onClick={sendData}/>
            <NavLink to={RoutePath.FORGOT_PASSWORD} className={s.routePath}>Forgot Password? </NavLink>
            <div>
                <NavLink to={RoutePath.REGISTRATION}
                         className={s.routePath}>Don't have an account?Sign Up </NavLink>
            </div>
        </div>
    );
};
