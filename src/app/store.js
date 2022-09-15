import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import apiSlice from '../api/apiSlice'
import auth from './states/auth'
import meta from './states/meta'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore, PURGE } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
	key: 'root',
	storage,
}

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: persistReducer(persistConfig, auth),
		meta,
	},
	extraReducers: (builder) => {
		builder.addCase(PURGE, (state) => {
			customEntityAdapter.removeAll(state)
		})
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: apiSlice.middleware,
			},
			serializableCheck: false,
		}).concat(apiSlice.middleware),
	devTools: true,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
