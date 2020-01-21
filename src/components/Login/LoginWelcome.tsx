import React from 'react';
import style from "./LoginWelcome.module.css";

export const LoginWelcome: React.FunctionComponent = () => {
	return (
		<>
			<h1 className={style['header']}>Welcome</h1>
			<div className={style['body']}>Please sign in to continue</div>
		</>
	)
};
