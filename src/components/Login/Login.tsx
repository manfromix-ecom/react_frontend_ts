import React from 'react';

import {LoginWelcome} from './LoginWelcome';
import {LoginFormContainer} from '../../containers/LoginFormContainer';
import {LoginFooter} from './LoginFooter';
import {LogoGeLight} from '../common/Logos/LogoGeLight';
import style from "./LoginForm.module.scss";
import {ResetModule} from "./ResetModule/ResetModule";

export const Login = () => {
    return (
        <>
            <LoginWelcome />
            <hr />
            <LogoGeLight />
            <LoginFormContainer />
            <div className={style.actions}>
                <div><button form="login_form" className={style.button}>Sign In</button></div>
                <div><ResetModule /></div>
            </div>
            <hr />
            <LoginFooter />
        </>
        )
};
