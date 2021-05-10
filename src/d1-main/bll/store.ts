import {TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {LoginReducer} from "./reducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";
import {registrationReducer} from "./reducers/registration-reducer";

const rootReducer = combineReducers({
    login: LoginReducer,
    app: appReducer,
    register: registrationReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.__store__ = store;

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector