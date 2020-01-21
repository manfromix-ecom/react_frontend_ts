import React from "react";
import {reduxForm} from "redux-form";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {ResetForm} from '../components/Login/ResetModule/ResetForm';


const LoginReduxForm = reduxForm({form: 'reset_password'})(ResetForm);

const Reset = (props: any) => {
	const onSubmit = (formData: any) => {
		console.log('Reset', formData, props);
		props.history.push('/reset_sent');
	};

	return <div>
		<LoginReduxForm onSubmit={onSubmit}/>
	</div>
};

export const ResetFormContainer = compose(withRouter)(Reset);
