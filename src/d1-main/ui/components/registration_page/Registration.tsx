import React, {ChangeEvent, useState} from 'react';
import s from './../login_page/Login.module.css'
import {RoutePath} from "../../../../App";
import {NavLink, Redirect} from 'react-router-dom';
import {useTypedSelector} from "../../../bll/store";
import {useDispatch} from 'react-redux';
import {registerTC} from "../../../bll/reducers/registration-reducer";

export const Registration = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const isRegistration = useTypedSelector(state => state.register.isRegistration)

    const dispatch = useDispatch()
    const regData = {email,password}

    const sendEmailHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendPasswordHandler  = (e:ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const checkPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setConfirmPassword(e.currentTarget.value)
    }

    const sendData = () => dispatch(registerTC({regData}))

    if(isRegistration){
        return <Redirect to={RoutePath.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>Create your account</h1>
            <div>
                <input type={"text"}
                       className={s.input}
                       placeholder={"email"}
                value={email}
                       onChange={sendEmailHandler}
                />
            </div>
            <div>
                <input type={"password"}
                       className={s.input}
                       placeholder={"password"}
                value={password}
                       onChange={sendPasswordHandler}
                />
            </div>
            <div>
                <input type={"password"}
                       className={s.input}
                       placeholder={"confirm password"}
                        value={confirmPassword}
                       onChange={checkPasswordHandler}
                />
            </div>
            <div><button  className={s.btn} onClick={sendData}>Sign Up</button></div>
            <NavLink to={RoutePath.LOGIN}  className={s.routePath}>Log In</NavLink>
        </div>
    );
};

