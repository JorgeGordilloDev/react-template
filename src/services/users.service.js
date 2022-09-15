import apiSlice from '../api/apiSlice'

const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		user: builder.query({
			query: () => ({
				url: '/users/ ',
				method: 'GET',
			}),
		}),
	}),
})

export const { useUserQuery, useLazyUserQuery } = userApiSlice

export default userApiSlice
