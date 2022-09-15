import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
// import { labs, docente } from '../helpers/routes'

import AppLayout from '../layout/AppLayout'
import RegisterLayout from '../layout/RegisterLayout'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

import NotFoundPage from '../pages/NotFoundPage'

const AppRouter = () => {
	return (
		// Compomente global
		<BrowserRouter>
			<Routes>
				{/* App Layout */}
				<Route path="/" element={<AppLayout />}>
					{/* Public routes */}
					<Route path="/" index element={<HomePage />} />
					<Route path="/acerda-de" index element={<AboutPage />} />

					{/* Private routes */}
					<Route path="/" element={<PrivateRouter />}>
						<Route path="/profile" element={<DashboardPage />} />
					</Route>
				</Route>
				{/* Other layout */}
				<Route path="/" element={<RegisterLayout />}>
					<Route path="/login" index element={<LoginPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default AppRouter
