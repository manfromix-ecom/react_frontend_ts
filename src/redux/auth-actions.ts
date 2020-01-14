export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
	type: 'SET_USER_DATA', payload:
		{ userId, email, login, isAuth }
});