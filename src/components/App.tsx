import React from 'react';
import { Switch, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import {Login} from "./Login/Login";
import '../App.scss';

WebFont.load({
	google: {
		families: ['Helvetica Neue']
	}
});

export class App extends React.Component {
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

