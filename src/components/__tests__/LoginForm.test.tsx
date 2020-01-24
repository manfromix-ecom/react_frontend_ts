import React from 'react';
import style from '../Login/LoginForm.module.scss';
import {shallow} from 'enzyme';
import {LoginForm} from "../Login/LoginForm";
import resetModuleStyle from "../common/Modals/Modal.module.scss";
import {Login} from "../Login/Login";
import {LoginWelcome} from "../Login/LoginWelcome";

describe('LoginForm component', () => {
    test('username field presents in LoginForm', () => {
        const component = shallow(<LoginForm />);
        expect(component.find({name: 'username'})).toHaveLength(1);
    });

    test('password field presents in LoginForm', () => {
        const component = shallow(<LoginForm />);
        expect(component.find({name: 'password'})).toHaveLength(1);
    });

    test('Password type after click "Show" should be changed from password to text', () => {
        const component = shallow(<LoginForm />);
        const pswField = component.find({name: 'password'});
        const pswViewer = component.find({className: style.show});
        expect(pswField.props().type).toBe('password');

        let promise = new Promise(function(resolve, reject) {
            pswViewer.simulate('click');
        });
        promise.then(() => expect(pswField.props().type).toBe('text'));
    });
});