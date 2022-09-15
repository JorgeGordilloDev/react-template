import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../app/states/auth'

const PrivateRouter = ({ allowedRoles }) => {
	const location = useLocation()
	const user = useSelector(selectCurrentUser)

	const hasRole = (allowedRoles) =>
		user?.roles?.find((role) => allowedRoles?.includes(role))

	return !user ? (
		<Navigate to={'/login'} state={{ from: location }} replace />
	) : allowedRoles && !hasRole(allowedRoles) ? (
		<Navigate to={'/unauthorized'} state={{ from: location }} replace />
	) : (
		<Outlet />
	)
}

export default PrivateRouter
