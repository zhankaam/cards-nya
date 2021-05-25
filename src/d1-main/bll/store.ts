import {TypedUseSelectorHook, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/login-reducer";
import {appReducer} from "./reducers/app-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {forgotPassReducer} from "./reducers/forgotPass-reducer";
import {packsReducer} from "./reducers/packs-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    app: appReducer,
    register: registrationReducer,
    forgotPass: forgotPassReducer,
    packs: packsReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk));

// @ts-ignore
window.__store__ = store;

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector