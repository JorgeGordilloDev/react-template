import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../app/states/auth'

import VisitorMenu from './VisitorMenu'
import UserMenu from './UserMenu'

const index = () => {
	const user = useSelector(selectCurrentUser)

	// funcion para comprobar si el usuario tiene un cierto rol
	const hasRole = (allowedRoles) =>
		user?.roles?.find((role) => allowedRoles?.includes(role))

	return (
		<nav className="mt-2">
			<ul
				className="nav nav-pills nav-sidebar flex-column"
				data-widget="treeview"
				role="menu"
				data-accordion="false"
			>
				{user ? (
					<>
						{/* Si el usuario esta autentificado */}
						<UserMenu />
						{/*//? si quieren mostrar un menu dependiendo del rol utilicen lo siguiente */}
						{/* Si tiene el rol Alumno */}
						{/* {hasRole(['ALUMNO']) && <AlumnMenu />} */}
						{/* Si tiene el rol Docente */}
						{/* {hasRole(['DOCENTE']) && <TeacherMenu />} */}
						{/* Si tiene el rol Admin */}
						{/* {hasRole(['ADMIN']) && <ReportMenu />} */}
						{/* Si tiene el rol Tesorero */}
						{/* {hasRole(['TESORERO']) && <TreasuryMenu />} */}
						{/* Si tiene el rol Servicios */}
						{/* {hasRole(['SERVICIOS']) && <SchoolServiceMenu />} */}
						{/* Si tiene el rol Laboratorista */}
						{/* {hasRole(['LABORATORISTA']) && <Labs />} */}
					</>
				) : (
					<>
						{/* Si no esta autentificado */}
						<VisitorMenu />
					</>
				)}
			</ul>
		</nav>
	)
}
export default index
