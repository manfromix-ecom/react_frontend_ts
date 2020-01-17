import React from 'react';
import {create} from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../../redux/redux-store";
import Login from "./Login";
import resetModuleStyle from "./ResetModule/ResetModule.module.css";
import ReactTestUtils from 'react-dom/test-utils';

describe('Login component', () => {
    test('Modal window should appear after Forgot link clicking', () => {
        const component = create(
            <BrowserRouter >
                <Provider store={store}><Login /></Provider>
            </BrowserRouter>
        );
        const root = component.root;
        const link = root.findByProps({className: 'forgot_password_link'});

        expect(() => {
            root.findByProps({className: resetModuleStyle.wrapper});
        }).toThrow();

        let promise = new Promise(function(resolve, reject) {
            ReactTestUtils.Simulate.click(link);
        })
        promise.then(() => {
            expect(() => {
                root.findByProps({className: resetModuleStyle.wrapper});
            }).not.toThrow();
            }
        );
    });
});