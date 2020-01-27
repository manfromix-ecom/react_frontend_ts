import React from 'react';
import {reduxForm} from 'redux-form';
import {ResetForm} from '../components/Login/ResetModule/ResetForm';
import { connect } from "react-redux";
import { resetPassword } from "../redux/auth-reducer";

const ResetReduxForm = reduxForm({form: 'reset_password'})(ResetForm);

const Reset = (props: any) => {
	const {handleEmailSending} = props;
	const onSubmit = (formData: any) => {
		console.log('Reset', formData, props);
		handleEmailSending();
	};
	return <ResetReduxForm onSubmit={onSubmit} />
};

const mapStateToProps = (state: any) => ({
  isPasswordReset: state.auth.isPasswordReset
});

export const ResetFormContainer = connect(mapStateToProps, {resetPassword})(Reset);

