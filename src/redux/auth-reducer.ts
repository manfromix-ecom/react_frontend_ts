import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import * as actions from "./auth-actions";

type InferValueTypes<T> = T extends { [key: string]: infer U }
	? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
};

const authReducer = (state = initialState, action: ActionTypes) => {
	switch (action.type) {
		case 'SET_USER_DATA':
			return {
				...state,
				...action.payload
			}
		default:
			return state;
	}
}




export const getAuthUserData = () => async (dispatch: any) => {
	let response = await authAPI.me();

	if (response && 'data' in response && response.data.resultCode === 0) {
		let {id, login, email} = response.data.data;
		dispatch(actions.setAuthUserData(id, email, login, true));
	}
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {
	let response = await authAPI.login(email, password, rememberMe);
	if (response && 'data' in response) {
		if (response.data.resultCode === 0) {
			dispatch(getAuthUserData())
		} else {
			let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
			dispatch(stopSubmit("login", {_error: message}));
		}
	}
}




export const logout = () => async (dispatch: any) => {
	let response = await authAPI.logout();

	if (response && 'data' in response && response.data.resultCode === 0) {
		dispatch(actions.setAuthUserData(null, null, null, false));
	}
}

export default authReducer;