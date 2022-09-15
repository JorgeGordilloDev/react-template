import { NavLink, useLocation } from 'react-router-dom'

const AlumnMenu = () => {
	return (
		<>
			<li className="nav-item">
				<NavLink to={'/dashboard'} className="nav-link" end>
					<i className="nav-icon fas fa-home" />
					<p>Panel de control</p>
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink to={'/user/perfil'} className="nav-link">
					<i className="nav-icon fas fa-user" />
					<p>Perfil</p>
				</NavLink>
			</li>
		</>
	)
}

export default AlumnMenu
