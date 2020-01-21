
const fakeUserData = { data: { resultCode: 999, messages: [], data: {id: null, login: null, email: null} } };

export const authAPI = {
    me() {
        return fakeUserData;
    },
    login(email: string, password: string, rememberMe = false, captcha = null) {
        console.log('login', { email, password, rememberMe, captcha });
        return fakeUserData;
    },
    logout() {
        console.log('logout');
        return fakeUserData;
    }
};


