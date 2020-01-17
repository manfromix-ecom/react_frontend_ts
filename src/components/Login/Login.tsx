import React from 'react';
import {Route} from 'react-router-dom';

import LoginWelcome from './LoginWelcome';
import LoginFormContainer from '../../containers/LoginFormContainer';
import LoginFooter from './LoginFooter';
import ResetModule from './ResetModule/ResetModule';
import LogoGE from '../common/Logos/LogoGeLight';

const Login = () => {
    return (
        <>
            <LoginWelcome />
            <hr />

            <LogoGE />
            <LoginFormContainer />
            <hr />

            <LoginFooter />
            <Route path={['/reset','/reset_sent']} render={ResetModule}/>
        </>
        )
}


export default Login;