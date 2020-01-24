import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import {Login} from "./Login/Login";
import '../App.scss';

WebFont.load({
	google: {
		families: ['Helvetica Neue']
	}
});

type MyProps = any;
type MyState = {
	showModal: boolean,
	modalName: string
};

export class App extends React.Component<MyProps, MyState> {
	render() {
		return (
			<div className='app-wrapper' id='app-wrapper'>
				<Switch>
					<Route path='/' render={Login} />
				</Switch>
			</div>
		)
	}
}

