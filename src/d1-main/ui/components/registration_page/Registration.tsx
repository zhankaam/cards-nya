import React from 'react';
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
import {useInput} from "../../../hooks/useInput";

export const Registration = () => {

    const email = useInput('', {isEmpty: true, minLength: 3, isEmail: true})
    const password = useInput('', {isEmpty: true, minLength: 5, maxLength: 8})


    // const [email, setEmail] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    const isRegistration = useTypedSelector(state => state.register.isRegistration)
    const status = useTypedSelector(state => state.app.status)

    const dispatch = useDispatch()
    const regData = {email, password}

    // const sendEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.currentTarget.value)
    // }
    //
    // const sendPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.currentTarget.value)
    // }

    const sendData = () => dispatch(registerTC({regData}))

    if (isRegistration) {
        return <Redirect to={RoutePath.LOGIN}/>
    }

    const validationStyle = {
        color: 'red',
        fontFamily: 'Arial',
        padding: '3px',
    }

    return (
        <div className={s.wrapper}>
            <Title text="Create your account"/>
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
                <Button
                    text="Sign Up"
                    disabled={status === "loading"}
                    onClick={sendData}
                />
            </form>
            <Route to={RoutePath.LOGIN} text={"Log In"}/>
        </div>
    );
};

