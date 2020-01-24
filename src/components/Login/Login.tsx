import React from 'react';

import {LoginWelcome} from './LoginWelcome';
import {LoginFormContainer} from '../../containers/LoginFormContainer';
import {LoginFooter} from './LoginFooter';
import {LogoGeLight} from '../common/Logos/LogoGeLight';

export const Login = () => {
    return (
        <>
            <LoginWelcome />
            <hr />

            <LogoGeLight />
            <LoginFormContainer />
            <hr />

            <LoginFooter />
        </>
        )
};
