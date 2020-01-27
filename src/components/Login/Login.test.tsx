import React from 'react';
import {shallow} from "enzyme";
import {Login} from "./Login";
import {LoginWelcome} from "./LoginWelcome";
import {LogoGeLight} from "../common/Logos/LogoGeLight";
import {LoginFormContainer} from "../../containers/LoginFormContainer";
import {LoginFooter} from "./LoginFooter";
import {ResetModule} from "./ResetModule/ResetModule";

describe('Login component', () => {
    test('LoginWelcome presents in Login component', () => {
        const component = shallow(<Login />);
        expect(component.find(LoginWelcome)).toHaveLength(1);
    });

    test('LogoGeLight presents in Login component', () => {
        const component = shallow(<Login />);
        expect(component.find(LogoGeLight)).toHaveLength(1);
    });

    test('LoginFormContainer presents in Login component', () => {
        const component = shallow(<Login />);
        expect(component.find(LoginFormContainer)).toHaveLength(1);
    });

    test('LoginFooter presents in Login component', () => {
        const component = shallow(<Login />);
        expect(component.find(LoginFooter)).toHaveLength(1);
    });

    test('ResetModule does not present in Login component', () => {
        const component = shallow(<Login />);
        expect(component.find(ResetModule)).toHaveLength(0);
    });

});