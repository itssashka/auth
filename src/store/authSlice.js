import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: {},
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, {payload}) {
            state.user = payload.email;
            state.isAuth = true;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        reg(state, {payload}) {
            state.user = payload.email;
            state.isAuth = true;
            localStorage.setItem('user', JSON.stringify(payload));
        },
        logout(state) {
            state.isAuth = false;
            state.user = {};
            localStorage.removeItem('user');
        },
        checkIsAuth(state) {
            const user = JSON.parse(localStorage.getItem('user'));
            if(user) {
                state.user = user.email;
                state.isAuth = true;
            }
        }
    }
})

export default authSlice.reducer;
export const {login, reg, checkIsAuth, logout} = authSlice.actions;
export const getUser = state => state.auth.user;
export const getIsAuth = state => state.auth.isAuth;