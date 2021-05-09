export const enum ActionTypes {
    SET_STATUS = 'APP/SET-STATUS',
    INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS',
    IS_AUTH = 'LOGIN/IS_AUTH',
    UPDATE_PROFILE = 'LOGIN/UPDATE_PROFILE',
    LOGOUT = 'LOGOUT/LOGOUT_USERS',
    USER_REGISTER = 'REGISTRATION/USER_REGISTER',
    USER_REGISTER_ERROR = 'REGISTRATION/USER_REGISTER_ERROR',
    USER_REGISTER_STATUS = 'REGISTRATION/USER_REGISTER_STATUS',
    GET_PACKS = 'PACKS/GET_PACKS',
    SET_PACKS = 'PACKS/SET_PACKS',
    UPDATE_PACKS = 'PACKS/UPDATE_PACKS',
    LOADING_PACKS = 'PACKS/LOADING_PACKS',
    DELETE_PACKS = 'PACKS/DELETE_PACKS',
    GET_CARDS = 'CARDS/GET_CARDS',
    SET_CARDS = 'CARDS/SET_CARDS',
    UPDATE_CARDS = 'CARDS/UPDATE_CARDS',
    DELETE_CARDS = 'CARDS/DELETE_PACKS',
}

export const isAuthAC = (isAuth: boolean) => ({
    type: ActionTypes.IS_AUTH, payload: {isAuth},} as const)

export const updateProfileAC = (user: UserDataType) => ({
    type: ActionTypes.UPDATE_PROFILE, payload: {user} }as const)

export type UserDataType = {
    _id: string
    email: string
    name: string
    avatar: string
    publicCardPacksCount: number
    created: number
    updated: number
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error: string
}


export type ActionsType =  ReturnType<typeof isAuthAC> | ReturnType<typeof updateProfileAC>
