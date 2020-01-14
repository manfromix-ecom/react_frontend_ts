import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {compose} from "redux";
import store from "../redux/redux-store";
import App from "../components/App";

// const AppContainer = compose(withRouter)(App);


const thisApp = () => {
	return <BrowserRouter >
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
}

export default thisApp;
