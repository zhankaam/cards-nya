import {ActionTypes} from "../actions/types";
import {cardPacksType, packsAPI} from "../../dal/packs-api";
import {Dispatch} from "redux";
import {setAppErrorAC, setAppErrorActionType, setAppStatusAC, setAppStatusActionType} from "./app-reducer";
import {RootStateType} from "../store";
import {ThunkDispatch} from "redux-thunk";


const initialState = {
    cardPacks: [] as cardPacksType[],
    packsTotalCount: 30,
    currentPage: 1,
    name: '',
    max: 100,
    min: 0
}

export const packsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case ActionTypes.SET_PACKS:
        case ActionTypes.SET_CURRENT_PAGE:
        case ActionTypes.SET_PACKS_TOTAL_COUNT:
        case ActionTypes.CREATE_PACKS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

// Action Creators
export const setPacksAC = (cardPacks: cardPacksType[]) => ({type: ActionTypes.SET_PACKS, payload: {cardPacks}} as const)

export const addPacksAC = (newCardPacks: cardPacksType) => ({
    type: ActionTypes.CREATE_PACKS,
    payload: {newCardPacks}
} as const)

export const setCurrentPageAC = (currentPage: number) => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    payload: {currentPage}
} as const)

export const setPacksTotalCountAC = (packsTotalCount: number) => ({
    type: ActionTypes.SET_PACKS_TOTAL_COUNT,
    payload: {packsTotalCount}
} as const)

// Thunk Creators

export const getPacksTC = (page: number, pageCount: number, max: number, min: number, packName: string, user_id: string) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await packsAPI.getPacks(page, pageCount, max, min, packName, user_id)
        dispatch(setPacksAC(res.data.cardPacks))
        dispatch(setAppStatusAC("success"))
    } catch (err) {
        dispatch(setAppErrorAC(err))
        dispatch(setAppStatusAC("failed"))
    }
}

export const addPacksTC = (cardsPack: cardPacksType) => async (dispatch: Dispatch) => {
    dispatch(setAppStatusAC("loading"))
    try {
        const res = await packsAPI.addPack(cardsPack)
        dispatch(addPacksAC(res.data.cardPacks))
        dispatch(setAppStatusAC("success"))
    } catch (err) {
        dispatch(setAppErrorAC(err))
        dispatch(setAppStatusAC("failed"))
    }
}

export const deletePacksTC = (id: string, name: string, page: number, pageCount: number) => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    try {
        await packsAPI.deletePack(id)
        dispatch(getPacksTC(page, pageCount, 100, 0, name, id))
        dispatch(setAppStatusAC("success"))
    } catch (err) {
        dispatch(setAppErrorAC(err))
        dispatch(setAppStatusAC("failed"))
    }
}

export const updatePacksTC = (cardsPack: cardPacksType) => async (dispatch: ThunkDispatch<RootStateType, unknown, ActionsType>, getState: () => RootStateType) => {
    dispatch(setAppStatusAC("loading"))
    const reqPage = getState().packs.currentPage
    const totalCount = getState().packs.packsTotalCount

    try {
        await packsAPI.updatePack(cardsPack)
        dispatch(getPacksTC(reqPage, totalCount, 100, 0, '', ''))
        dispatch(setAppStatusAC("success"))
    } catch (err) {
        dispatch(setAppErrorAC(err))
        dispatch(setAppStatusAC("failed"))
    }
}


type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setPacksAC>
    | ReturnType<typeof addPacksAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof setCurrentPageAC>
    | setAppErrorActionType
    | setAppStatusActionType