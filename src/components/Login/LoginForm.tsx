import React, {useState} from 'react';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from "./LoginForm.module.css";
import controlStyle from "./../common/FormsControls/FormsControls.module.css";
import {Link} from "react-router-dom";

const LoginForm = ({handleSubmit, error}: any) => {
	const [isPasswordShown, setPasswordView] = useState(false);

	const togglePassword = () => {
		setPasswordView(!isPasswordShown);
	}

	const ShowButton = () => <span onClick={togglePassword} className={style['show']}>{isPasswordShown ? "Hide" : "Show"}</span>

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="username" className="input-label">Username</label>
			{createField("Username", "username", [required], Input, {className: "input-bg", id: "username"})}
			<label htmlFor="password" className="input-label">Password</label>
			<div className={style['password_wrapper']}>
				{createField("Password", "password", [required], Input,
					{className: "input-bg", id: "password", type: isPasswordShown ? "text" : "password"})}
				<ShowButton />
			</div>

			{error && <div className={controlStyle.formSummaryError}>
				{error}
			</div>
			}
			<div className={style["actions"]}>
				<div><button>Sign In</button></div>
				<div className={style['Forgot-password']}><Link to="/reset">Forgot password?</Link></div>
			</div>
		</form>
	)
}

export default LoginForm;