import React, {ChangeEvent, useState} from 'react';
import s from './../login_page/Login.module.css'
import {RoutePath} from "../../../../App";
import {Redirect} from 'react-router-dom';
import {useTypedSelector} from "../../../bll/store";
import {useDispatch} from 'react-redux';
import {registerTC} from "../../../bll/reducers/registration-reducer";
import {Button} from "../../../../d2-common/components/Button/Button";
import {Title} from "../../../../d2-common/components/Title/Title";
import {Input} from "../../../../d2-common/components/Input/Input";
import {Route} from "../../../../d2-common/components/Route/Route";

export const Registration = () => {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const isRegistration = useTypedSelector(state => state.register.isRegistration)
    const status = useTypedSelector(state => state.app.status)

    const dispatch = useDispatch()
    const regData = {email, password}

    const sendEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }

    const sendPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }

    const sendData = () => dispatch(registerTC({regData}))

    if (isRegistration) {
        return <Redirect to={RoutePath.LOGIN}/>
    }

    return (
        <div className={s.wrapper}>
            <Title text="Create your account"/>
            <Input type="text" value={email} placeholder="email" onChange={sendEmailHandler}/>
            <Input type="password" value={password} placeholder="password" onChange={sendPasswordHandler}/>
            <Button text="Sign Up" disabled={status === "loading"} onClick={sendData}/>
            <Route to={RoutePath.LOGIN} text={"Log In"}/>
        </div>
    );
};

