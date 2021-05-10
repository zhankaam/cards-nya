import {ActionTypes} from "../actions/ActionCreators";

const initialState = {
    status: null as null | RequestStatusType,
    initializedSuccess: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ActionTypes.SET_STATUS:
            return {...state, status: action.status}
        case ActionTypes.INITIALIZED_SUCCESS:
            return {...state, initializedSuccess: true}
        default:
            return {...state}
    }
}

export type InitialStateType = typeof initialState

export const setAppStatusAC = (status: RequestStatusType) => ({type: ActionTypes.SET_STATUS, status} as const)
export const initializedSuccess = () => ({type: ActionTypes.INITIALIZED_SUCCESS} as const)


export type setAppStatusActionType = ReturnType<typeof setAppStatusAC>;
export type appInitializedActionType = ReturnType<typeof initializedSuccess>;
type ActionsType =
    | setAppStatusActionType
    | appInitializedActionType

export type RequestStatusType = "loading" | "success" | "failed"