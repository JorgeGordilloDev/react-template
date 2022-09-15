import apiSlice from '../api/apiSlice'

const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		user: builder.query({
			query: () => ({
				url: '/users/ ',
				method: 'GET',
			}),
		}),
		profile: builder.query({
			query: (id) => ({
				url: `/users/${id}/profile/`,
				method: 'GET',
			}),
		}),
	}),
})

export const { useUserQuery, useLazyUserQuery, useProfileQuery } = userApiSlice

export default userApiSlice
