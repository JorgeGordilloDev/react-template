import apiSlice from '../api/apiSlice'

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				// TODO: cambiar la ruta del login
				// url: '/auth/login/ ',
				url: '/user/token ',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApiSlice

export default authApiSlice
