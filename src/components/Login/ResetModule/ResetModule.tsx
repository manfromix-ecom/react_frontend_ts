import React from "react";
import {Route, Link} from "react-router-dom";

import style from "./ResetModule.module.scss";
import {ResetFormContainer} from '../../../containers/ResetFormContainer';

export const ResetModule = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.header}>
				<span className={style.header_text}>
					<Route path='/reset'>
						Password Reset
					</Route>
					<Route path='/reset_sent'>
						Email Sent
					</Route>
				</span>
				<Link to="/login" className={style.close_modal}><span>&times;</span></Link>
			</div>
			<div className={style.body}>
					<Route path='/reset'>
						<p>Please enter the email address associated
							with your globaledit account to reset your password.</p>
						<ResetFormContainer />
					</Route>
					<Route path='/reset_sent'>
						<p>Thank you, instructions to reset your password have been e-mailed
							to the address you provided!</p>
					</Route>
			</div>
		</div>
		)
};
