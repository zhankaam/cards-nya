import {TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {LoginReducer} from "./reducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    app: appReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.__store__ = store;

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector