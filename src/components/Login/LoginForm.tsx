import React, {useState} from 'react';
import {createField, Input} from '../common/FormsControls/FormsControls';
import {required} from "../../utils/validators/validators";
import style from './LoginForm.module.scss';
import controlStyle from '../common/FormsControls/FormsControls.module.scss';

export const LoginForm: React.FunctionComponent = ({handleSubmit, error}: any) => {

	const [isPasswordShown, setPasswordView] = useState(false);

	const togglePassword = () => {
		setPasswordView(!isPasswordShown);
	};

	return (
		<form onSubmit={handleSubmit} id="login_form">
			<label htmlFor="username" className="input-label">Username</label>
			{createField("", "username", [required], Input,
				{className: "input-bg", id: "username"})}
			<label htmlFor="password" className="input-label">Password</label>
			<div className={style.password_wrapper}>
				{createField("", "password", [required], Input,
					{className: "input-bg", id: "password", type: isPasswordShown ? "text" : "password"})}
				<span onClick={togglePassword} className={style.show}>{isPasswordShown ? "Hide" : "Show"}</span>
			</div>

			{error && <div className={controlStyle.formSummaryError}>
				{error}
			</div>
			}
		</form>

	)
};
