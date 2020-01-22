import React from 'react';
import style from "./LoginWelcome.module.scss";

export const LoginWelcome: React.FunctionComponent = () => {
	return (
		<>
			<h1 className={style['header']}>Welcome</h1>
			<p className={style['body']}>Please sign in to continue</p>
		</>
	)
};
