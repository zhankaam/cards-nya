import {ActionTypes} from "../actions/ActionCreators";
import {authAPI, RegistrationRequestType} from "../../dal/api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "./app-reducer";

const initialState = {
    isRegistration: false,

}

export const registrationReducer = (state:  InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type){
        case ActionTypes.USER_REGISTER:
            return {
                ...state,
                 ...action.payload
            }
        default:
            return state
    }
}


export const registerUsersAC = (isRegistration: boolean) => ({
    type: ActionTypes.USER_REGISTER, payload: {isRegistration}}as const)


export const registerTC = (regData: RegistrationRequestType) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    return authAPI.register({...regData})
        .then((res) => {
            dispatch(registerUsersAC(true))
            dispatch(setAppStatusAC("success"))

        })
        .catch((err) => {
            dispatch(setAppStatusAC("failed"))
            console.error(err)
        })
}

type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof registerUsersAC>