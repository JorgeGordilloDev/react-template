// * Documentacion
// * https://redux-toolkit.js.org/rtk-query/overview
// * https://redux-toolkit.js.org/rtk-query/usage-with-typescript#createapi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../app/states/auth'

const baseUrl = 'http://127.0.0.1:8000/v1'

const baseQuery = fetchBaseQuery({
	baseUrl,
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token
		if (token) {
			headers.set('authorization', `Bearer ${token.access}`)
		}
		return headers
	},
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)

	if (result?.error?.status == 401) {
		// send refresh token to get new access token
		const refreshResult = await baseQuery(
			{
				url: '/auth/refresh/',
				method: 'POST',
				body: { refresh: api.getState().auth.token?.refresh },
			},
			api,
			extraOptions
		)
		if (refreshResult?.data) {
			const user = api.getState().auth.user
			// store the new token
			api.dispatch(
				setCredentials({
					user,
					accessToken: {
						access: refreshResult.data.access,
						refresh: refreshResult.data.refresh,
					},
				})
			)
			// retry the original query with new access token
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logOut())
		}
	}

	return result
}

const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	reducerPath: 'apiSlice',
	endpoints: (builder) => ({}),
})

export default apiSlice
