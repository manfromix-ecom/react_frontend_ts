import React from "react";
import {Route, Link} from "react-router-dom";

import style from "./ResetModule.module.css";
import {ResetFormContainer} from '../../../containers/ResetFormContainer';

export const ResetModule = () => {
	return (
		<div className={style['wrapper']}>
			<div className={style['header']}>
				<span className={style['header-text']}>
					<Route path='/reset'>
						Password Reset
					</Route>
					<Route path='/reset_sent'>
						Email Sent
					</Route>
				</span>
				<Link to="/login" className={style['close-modal']}>&times;</Link>
			</div>
			<div className={style['body']}>
					<Route path='/reset'>
						<div>Please enter the email address associated
							with your globaledit account to reset your password.</div>
						<ResetFormContainer />
					</Route>
					<Route path='/reset_sent'>
						<div>Thank you, instructions to reset your password have been e-mailed
							to the address you provided!</div>
					</Route>
			</div>
		</div>
		)
};
