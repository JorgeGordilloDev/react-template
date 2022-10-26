import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../app/states/auth'

const PrivateRouter = ({ allowedRoles }) => {
	const location = useLocation()
	const user = useSelector(selectCurrentUser)

	return !user ? (
		<Navigate to={'/login'} state={{ from: location }} replace />
	) : allowedRoles && !user?.role === allowedRoles ? (
		<Navigate to={'/unauthorized'} state={{ from: location }} replace />
	) : (
		<Outlet />
	)
}

export default PrivateRouter
