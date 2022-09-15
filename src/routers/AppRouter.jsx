import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
// import { labs, docente } from '../helpers/routes'

import AppLayout from '../layout/AppLayout'
import RegisterLayout from '../layout/RegisterLayout'

import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

import UserProfilePage from '../pages/user/Profile'

import NotFoundPage from '../pages/NotFoundPage'
import Unauthorized from '../pages/Unauthorized'

const AppRouter = () => {
	return (
		// Compomente global
		<BrowserRouter>
			<Routes>
				{/* App Layout */}
				<Route path="/" element={<AppLayout />}>
					{/* Public routes */}
					<Route path="/" index element={<HomePage />} />
					<Route path="/acerda-de" element={<AboutPage />} />

					{/* Private routes */}
					<Route path="/" element={<PrivateRouter />}>
						<Route path="/dashboard" element={<DashboardPage />} />
						<Route
							path="/user/perfil"
							element={<UserProfilePage />}
						/>
					</Route>

					<Route path="/no-autorizado" element={<Unauthorized />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
				{/* Other layout */}
				<Route path="/" element={<RegisterLayout />}>
					<Route path="/login" index element={<LoginPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
export default AppRouter
