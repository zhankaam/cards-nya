import {ActionTypes} from "../actions/ActionCreators";
import {authAPI, LoginResponseType, RegistrationRequestType} from "../../dal/api";
import {Dispatch} from "redux";
import {setAppStatusAC, setAppStatusActionType} from "./app-reducer";

const initialState = {
    isAuth: false,
    user: {
        email: '',
        isAdmin: false,
        name: '',
        rememberMe: false,
        token: '',
        _id: '',
    }
}

export const loginReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ActionTypes.IS_AUTH:
            return {
                ...state,
                isAuth: action.payload.isAuth
            }
        case ActionTypes.UPDATE_PROFILE:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload.user.name
                }
            }
        case ActionTypes.SET_USER_DATA:
            return {
                ...state,
                user: action.payload.userData
            }
        default:
            return state
    }
}

export const isAuthAC = (isAuth: boolean) => ({
    type: ActionTypes.IS_AUTH, payload: {isAuth},
} as const)

export const updateProfileAC = (user: LoginResponseType) => ({
    type: ActionTypes.UPDATE_PROFILE, payload: {user}
} as const)

export const setUserDataAC = (userData: LoginResponseType) => ({
    type: ActionTypes.SET_USER_DATA, payload: {userData}
} as const)


export const loginTC = (regData: RegistrationRequestType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    return authAPI.login(regData)
        .then((res) => {
            dispatch(setUserDataAC(res.data))
            dispatch(setAppStatusAC("success"))
            dispatch(isAuthAC(true))
        })
        .catch((err) => {
            dispatch(setAppStatusAC("failed"))
            console.error(err)
        })
}
export const logOutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            dispatch(isAuthAC(false));
            dispatch(setAppStatusAC('success'))
        })
        .catch(err => {
            dispatch(setAppStatusAC('failed'));
            console.error(err)
        })
}

type InitialStateType = typeof initialState
export type ActionsType =
    ReturnType<typeof isAuthAC>
    | ReturnType<typeof updateProfileAC>
    | ReturnType<typeof setUserDataAC>
    | setAppStatusActionType
