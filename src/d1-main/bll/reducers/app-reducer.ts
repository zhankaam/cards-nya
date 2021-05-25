import {ActionTypes} from "../actions/types";

const initialState = {
    status: null as null | RequestStatusType,
    initializedSuccess: false,
    error: null as string | null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ActionTypes.SET_STATUS:
            return {...state, status: action.status}
        case ActionTypes.SET_ERROR:
            return {...state, error: action.error}
        case ActionTypes.INITIALIZED_SUCCESS:
            return {...state, initializedSuccess: true}
        default:
            return {...state}
    }
}

export type InitialStateType = typeof initialState

export const setAppStatusAC = (status: RequestStatusType) => ({type: ActionTypes.SET_STATUS, status} as const)
export const setAppErrorAC = (error: string) => ({type: ActionTypes.SET_ERROR, error} as const)
export const initializedSuccess = () => ({type: ActionTypes.INITIALIZED_SUCCESS} as const)


export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type setAppErrorActionType = ReturnType<typeof setAppErrorAC>;
export type appInitializedActionType = ReturnType<typeof initializedSuccess>;
type ActionsType =
    | setAppStatusActionType
    | appInitializedActionType
    | setAppErrorActionType

export type RequestStatusType = "loading" | "success" | "failed"