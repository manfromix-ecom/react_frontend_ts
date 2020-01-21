import React from 'react';
import {Route} from 'react-router-dom';

import {LoginWelcome} from './LoginWelcome';
import {LoginFormContainer} from '../../containers/LoginFormContainer';
import {LoginFooter} from './LoginFooter';
import {ResetModule} from './ResetModule/ResetModule';
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
            <Route path={['/reset','/reset_sent']} render={ResetModule}/>
        </>
        )
};
