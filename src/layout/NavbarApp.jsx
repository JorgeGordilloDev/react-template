import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentIsLogin, logOut } from '../app/states/auth'

const NavbarApp = () => {
	const dispatch = useDispatch()
	const isLogin = useSelector(selectCurrentIsLogin)

	const handlelogOut = () => {
		dispatch(logOut())
	}

	return (
		<nav className="main-header navbar navbar-expand navbar-dark">
			{/* <!-- Left navbar links --> */}
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link
						className="nav-link"
						data-widget="pushmenu"
						to="#"
						role="button"
					>
						<i className="fas fa-bars"></i>
					</Link>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<Link to="/" className="nav-link">
						Home
					</Link>
				</li>
				<li className="nav-item d-none d-sm-inline-block">
					<Link to="/acerda-de" className="nav-link">
						Acerda de
					</Link>
				</li>
			</ul>

			{/* <!-- Right navbar links --> */}
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link
						className="nav-link"
						data-widget="fullscreen"
						to="#"
						role="button"
					>
						<i className="fas fa-expand-arrows-alt"></i>
					</Link>
				</li>
				{isLogin && (
					<li className="nav-item d-none d-sm-inline-block">
						<Link className="nav-link" onClick={handlelogOut}>
							Cerrar sesion
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}

export default NavbarApp
