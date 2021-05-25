import {ActionTypes} from "../actions/types";
import {setAppStatusAC, setAppStatusActionType} from "./app-reducer";
import {Dispatch} from "redux";
import {authAPI} from "../../dal/api";

const initialState = {
    isForgotPass: false
}

export const forgotPassReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ActionTypes.IS_FORGOT_PASS:
            return {...state, ...action.payload}

        default:
            return {...state}
    }
}

export type InitialStateType = typeof initialState


export const isForgotPassword = (isForgotPass: boolean) => ({
    type: ActionTypes.IS_FORGOT_PASS,
    payload: {isForgotPass}
} as const)

type ActionsType = ReturnType<typeof isForgotPassword> | setAppStatusActionType

export const forgotPasswordTC = (email: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.forgot(email)
        .then(() => {
            dispatch(isForgotPassword(true))
            dispatch(setAppStatusAC("success"))
        })
        .catch(err => {
            console.log(err)
        })
}