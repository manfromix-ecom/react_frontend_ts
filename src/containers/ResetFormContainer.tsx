import React from "react";
import {reduxForm} from "redux-form";
import {ResetForm} from '../components/Login/ResetModule/ResetForm';
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const ResetReduxForm = reduxForm({form: 'reset_password'})(ResetForm);

export const ResetFormContainer = (props: any) => {
	const onSubmit = (formData: any) => {
		console.log('Reset', formData, props);
		props.handleEmailSending();
	};
	return <ResetReduxForm onSubmit={onSubmit} />
};

// export const ResetFormContainer = compose(withRouter)(Reset);

