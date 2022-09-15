import { Link } from 'react-router-dom'
import Menu from './Menu'
import icon from '../assets/react.svg'

const SliderApp = () => {
	return (
		<aside className="main-sidebar sidebar-dark-primary elevation-4">
			<Link to="/" className="brand-link">
				<img
					src={icon}
					alt="Universidad Politecnica de Tapachula Logo"
					className="brand-image img-circle elevation-3"
					style={{ opacity: '.8' }}
				/>
				<span className="brand-text font-weight">SIIUP</span>
			</Link>
			<div className="sidebar">
				<div className="user-panel mt-3 pb-3 mb-3 d-flex">
					<div className="image">
						<img
							src="/dist/img/user2-160x160.jpg"
							className="img-circle elevation-2"
							alt="User Image"
						/>
					</div>
					<div className="info">
						<a href="#" className="d-block">
							Kevin Osorio
						</a>
					</div>
				</div>
				<Menu />
			</div>
		</aside>
	)
}

export default SliderApp
