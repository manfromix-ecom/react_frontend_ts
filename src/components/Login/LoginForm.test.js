import React from 'react';
import { create } from 'react-test-renderer';
import LoginFormContainer from '../../containers/LoginFormContainer';
import LoginForm from './LoginForm';
import store from "../../redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import style from './LoginForm.module.css';
import ReactTestUtils from 'react-dom/test-utils';

describe('LoginForm component', () => {
    test('Password type should be password', () => {
        const component = create(
            <BrowserRouter >
                <Provider store={store}><LoginFormContainer /></Provider>
            </BrowserRouter>
        );
        const root = component.root;
        const pswField = root.findByProps({name:'password'});
        expect(pswField.props.type).toBe('password');
    });

    test('Password type after click show should be text', () => {
        const component = create(
            <BrowserRouter >
                <Provider store={store}><LoginFormContainer /></Provider>
            </BrowserRouter>
        );
        const root = component.root;
        const pswField = root.findByProps({name:'password'});
        const pswViewer = root.findByProps({className: style.show});
        ReactTestUtils.Simulate.click(pswViewer);
        expect(pswField.props.type).toBe('text');
    });

});