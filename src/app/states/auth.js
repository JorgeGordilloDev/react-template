import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	user: null,
	token: null,
	isLogin: false,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setCredentials: (state, action) => {
			const { user, accessToken } = action.payload
			state.user = user
			state.token = accessToken
			state.isLogin = true
		},
		logOut: () => initialState,
		isLogin: (state, action) => state.isLogin,
	},
})

export const { setCredentials, logOut, isLogin } = authSlice.actions

export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectCurrentRole = (state) => state.auth.user.role
export const selectCurrentIsLogin = (state) => state.auth.isLogin
export const selectCurrentToken = (state) => state.auth.token
