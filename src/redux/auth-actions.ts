export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: 'SET_USER_DATA', payload:
		{ userId, email, login, isAuth }
});

export const resetUserPassword = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: 'RESET_USER_PASSWORD', payload:
		{ userId, email, login, isAuth }
});