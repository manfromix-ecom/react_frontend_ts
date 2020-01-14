import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import WebFont from 'webfontloader';
import LoginPage from "./Login/Login";
import '../App.css';

WebFont.load({
	google: {
		families: ['Helvetica Neue']
	}
});

class App extends Component {
	render() {
		return (
			<div className='app-wrapper' id='app-wrapper'>
				<div className='app-form-wrapper' id='app-form-wrapper'>
					<Switch>
						<Route path='/' render={LoginPage} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;
