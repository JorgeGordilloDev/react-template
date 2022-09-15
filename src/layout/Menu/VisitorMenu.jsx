import { NavLink } from 'react-router-dom'
import { inicio, login } from '../../helpers/routes'

const VisitorMenu = () => {
	return (
		<>
			<li className="nav-item">
				<NavLink to={inicio} className="nav-link">
					<i className="nav-icon fas fa-th" />
					<p>Inicio</p>
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to={login} className="nav-link">
					<i className="nav-icon fas fa-th" />
					<p>Login</p>
				</NavLink>
			</li>
		</>
	)
}

export default VisitorMenu
