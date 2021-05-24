import React, {ChangeEvent, useState} from 'react';
import s from './ForgotPassword.module.css'
import {RoutePath} from "../../../../App";
import {Redirect} from 'react-router-dom';
import {useTypedSelector} from "../../../bll/store";
import {useDispatch} from 'react-redux';
import {forgotPasswordTC} from "../../../bll/reducers/forgotPass-reducer";
import {RequestStatusType} from "../../../bll/reducers/app-reducer";
import {Title} from "../../../../d2-common/components/Title/Title";
import {Input} from "../../../../d2-common/components/Input/Input";
import {Button} from "../../../../d2-common/components/Button/Button";
import {Route} from "../../../../d2-common/components/Route/Route";

export const ForgotPassword = () => {

    const [restorePass, setRestorePass] = useState<string>("")
    const isForgotPass = useTypedSelector<boolean>(state => state.forgotPass.isForgotPass)
    const status = useTypedSelector<RequestStatusType | null>(state => state.app.status)
    const dispatch = useDispatch()

    const onChangePassHandler = (e: ChangeEvent<HTMLInputElement>) => setRestorePass(e.currentTarget.value)
    const restorePassHandler = () => dispatch(forgotPasswordTC(restorePass))

    if (isForgotPass) {
        return <Redirect to={RoutePath.RESET_PASSWORD}/>
    }

    return (
        <div className={s.wrapper}>
            <Title text="Forgot Password"/>
            <Input type="text" value={restorePass} placeholder="enter your email address" onChange={onChangePassHandler}/>
            <Button text="Send email" disabled={status === "loading"} onClick={restorePassHandler}/>
            <Route to={RoutePath.LOGIN} text={"Log In"}/>
        </div>
    );
};

