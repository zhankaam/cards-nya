import {ActionsType, ActionTypes} from "../actions/ActionCreators";

const initialState = {
  isAuth: false,
    user: {
        avatar: '',
        created: 5,
        email: '',
        isAdmin: false,
        name: '',
        publicCardPacksCount: 0,
        rememberMe: false,
        token: '',
        updated: 5,
        _id: '',
    }
}

export const LoginReducer = (state:  InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type){
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
                    name: action.payload.user.name,
                    avatar: action.payload.user.avatar
                }
            }
        default:
            return state
    }
}

type InitialStateType = typeof initialState