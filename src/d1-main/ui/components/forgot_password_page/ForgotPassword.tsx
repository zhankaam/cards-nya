import React from 'react';
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
import {useInput} from "../../../hooks/useInput";

export const ForgotPassword = () => {

    const restorePass = useInput('', {isEmpty: true, minLength: 3, isEmail: true})

    // const [restorePass, setRestorePass] = useState<string>("")
    const isForgotPass = useTypedSelector<boolean>(state => state.forgotPass.isForgotPass)
    const status = useTypedSelector<RequestStatusType | null>(state => state.app.status)
    const dispatch = useDispatch()

    // const onChangePassHandler = (e: ChangeEvent<HTMLInputElement>) => setRestorePass(e.currentTarget.value)
    const restorePassHandler = () => dispatch(forgotPasswordTC(restorePass))

    if (isForgotPass) {
        return <Redirect to={RoutePath.RESET_PASSWORD}/>
    }

    const validationStyle = {
        color: 'red',
        fontFamily: 'Arial',
        padding: '3px',
    }


    return (
        <div className={s.wrapper}>
            <Title text="Forgot Password"/>
            <form>
                <Input
                    placeholder="enter your email address"
                    type="text"
                    value={restorePass.value}
                    name="email"
                    onChange={e => restorePass.onChange(e)}
                    onBlur={e => restorePass.onBlur(e)}
                />
                {(restorePass.isDirty && restorePass.isEmpty) &&
                <div style={validationStyle}>the field cannot be empty</div>}
                {(restorePass.isDirty && restorePass.minLengthError) && <div style={validationStyle}>incorrect length</div>}
                {(restorePass.isDirty && restorePass.maxLengthError) && <div style={validationStyle}>too long password</div>}
                <Button
                    text="Send email"
                    disabled={status === "loading"}
                    onClick={restorePassHandler}
                />
            </form>
            <Route to={RoutePath.LOGIN} text={"Log In"}/>
        </div>
    );
};

