import React from 'react';
import {reduxForm} from "redux-form";
import {LoginForm} from "../components/Login/LoginForm";

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export const LoginFormContainer = () => {
	const onSubmit = (formData: any) => {
		console.log('Login', formData)
	};

	return <div>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
};
