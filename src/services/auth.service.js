import apiSlice from '../api/apiSlice'

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (body) => ({
				url: '/auth/login/ ',
				method: 'POST',
				body,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApiSlice

export default authApiSlice
