import React from 'react';
import {reduxForm} from 'redux-form';
import {LoginForm} from '../components/Login/LoginForm';
import {login} from '../redux/auth-reducer';
import { connect } from "react-redux";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props: any) => {
	const onSubmit = (formData: any) => {
		const {login} = props;
		console.log('Login', formData);
		login(formData.email, formData.password);
	};

	return <LoginReduxForm onSubmit={onSubmit}/>
};

const mapStateToProps = (state: any) => ({
	isAuth: state.auth.isAuth
});

export const LoginFormContainer = connect(mapStateToProps, {login})(Login);