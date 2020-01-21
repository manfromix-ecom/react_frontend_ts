import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import {Login} from "./Login/Login";
import '../App.css';

WebFont.load({
	google: {
		families: ['Helvetica Neue']
	}
});

export class App extends Component {
	render() {
		return (
			<div className='app-wrapper' id='app-wrapper'>
				<div className='app-form-wrapper' id='app-form-wrapper'>
					<Switch>
						<Route path='/' render={Login} />
					</Switch>
				</div>
			</div>
		)
	}
}

