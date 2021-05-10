import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Navbar} from "./d1-main/ui/routing/Navbar";
import {HomePage} from "./d1-main/ui/components/home_page/HomePage";
import {Login} from "./d1-main/ui/components/login_page/Login";
import {Registration} from "./d1-main/ui/components/registration_page/Registration";
import {ForgotPassword} from "./d1-main/ui/components/forgot_password_page/ForgotPassword";
import {Error} from "./d1-main/ui/components/error_page/Error";
import {Test} from "./d1-main/ui/components/test_page/Test";
import {Packs} from "./d1-main/ui/components/packs_page/Packs";
import {Cards} from "./d1-main/ui/components/cards_page/Cards";


export const RoutePath = {
    HOME_PAGE: '/',
    LOGIN: '/login',
    REGISTRATION: '/register',
    FORGOT_PASSWORD: '/forgotPassword',
    RESET_PASSWORD: '/resetPassword',
    ERROR: '/error',
    CARDS: '/cards',
    PACKS: '/packs',
    TEST: '/test'
}


function App() {

    return (
        <div className="App">
            <div>
                <Navbar/>
            </div>
            <div>
                <Switch>
                    <Route exact path={RoutePath.HOME_PAGE} render={() => <HomePage/>}/>
                    <Route exact path={RoutePath.LOGIN} render={() => <Login/>}/>
                    <Route exact path={RoutePath.REGISTRATION} render={() => <Registration/>}/>
                    <Route exact path={RoutePath.FORGOT_PASSWORD} render={() => <ForgotPassword/>}/>
                    {/*<Route exact path={RoutePath.RESET_PASSWORD} render={() => <ResetPassword/>}/>*/}
                    <Route exact path={RoutePath.PACKS} render={() => <Packs/>}/>
                    <Route exact path={RoutePath.CARDS} render={() => <Cards/>}/>
                    <Route exact path={RoutePath.ERROR} render={() => <Error/>}/>
                    <Route exact path={RoutePath.TEST} render={() => <Test/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
