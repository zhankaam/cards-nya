import React, {ChangeEvent, useState} from 'react';
import {Redirect} from 'react-router-dom';
import s from './Login.module.css'
import {RoutePath} from "../../../../App";
import {useDispatch} from 'react-redux';
import {useTypedSelector} from "../../../bll/store";
import {loginTC} from "../../../bll/reducers/login-reducer";
import {Title} from "../../../../d2-common/components/Title/Title";
import {Input} from "../../../../d2-common/components/Input/Input";
import {Button} from "../../../../d2-common/components/Button/Button";
import {Route} from "../../../../d2-common/components/Route/Route";
import {useInput} from "../../../hooks/useInput";


export const Login = () => {

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8})

    // const [email, setEmail] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isAuth = useTypedSelector(state => state.login.isAuth)
    const status = useTypedSelector(state => state.app.status)

    const dispatch = useDispatch()
    const regData = {email, password, rememberMe}

    // const sendEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.currentTarget.value)
    // }
    //
    // const sendPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.currentTarget.value)
    // }

    const sendRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }

    const sendData = () => dispatch(loginTC({regData}))

    if (isAuth) {
        return <Redirect to={RoutePath.HOME_PAGE}/>
    }

    const validationStyle = {
        color: 'red',
        fontFamily: 'Arial',
        padding: '3px',
    }

    return (
        <div className={s.wrapper}>
            <Title text="Login"/>
            {/*<Input type="text" value={email} placeholder="email" onChange={sendEmailHandler}/>*/}
            <form>
                <Input
                    type="text"
                    value={email.value}
                    placeholder="email"
                    name="email"
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                />
                {(email.isDirty && email.isEmpty) && <div style={validationStyle}>the field cannot be empty</div>}
                {(email.isDirty && email.minLengthError) && <div style={validationStyle}>incorrect length</div>}
                {(email.isDirty && email.maxLengthError) && <div style={validationStyle}>too long password</div>}
                {/*<Input type="password" value={password} placeholder="password" onChange={sendPasswordHandler}/>*/}
                <Input
                    type="password"
                    value={password.value}
                    placeholder="password"
                    name="password"
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    autoComplete="currentPassword"
                />
                {(password.isDirty && password.isEmpty) && <div style={validationStyle}>the field cannot be empty</div>}
                {(password.isDirty && password.minLengthError) && <div style={validationStyle}>incorrect length</div>}
                {(password.isDirty && password.maxLengthError) && <div style={validationStyle}>too long password</div>}
                <Input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={sendRememberMeHandler}
                />
                <Button
                    type="submit"
                    text="Sign In"
                    disabled={status === "loading"}
                    onClick={sendData}
                />
            </form>
            <Route to={RoutePath.FORGOT_PASSWORD} text={"Forgot Password?"}/>
            <div>
                <Route to={RoutePath.REGISTRATION} text={"Don't have an account?Sign Up"}/>
            </div>
        </div>
    );
};
