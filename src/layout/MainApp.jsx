import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
	selectCurrentAlert,
	selectCurrentTitle,
	selectCurrentBreadcrumb,
} from '../app/states/meta'
import Alert from '../components/Alert'

const MainApp = () => {
	const { pathname } = useLocation()
	const title = useSelector(selectCurrentTitle)
	const Breadcrumb = useSelector(selectCurrentBreadcrumb)
	const alert = useSelector(selectCurrentAlert)

	return (
		<div className="content-wrapper">
			<div className="content-header">
				<div className="container-fluid">
					<div className="row mb-2">
						<div className="col-sm-6">
							<h1 className="m-0">{title}</h1>
						</div>
						<div className="col-sm-6">
							{pathname !== '/' && (
								<ol className="breadcrumb float-sm-right">
									<li className="breadcrumb-item">
										<Link to={'/'}>
											<i className="fa fa-tachometer-alt"></i>
											&nbsp; Inicio
										</Link>
									</li>
									<Breadcrumb />
								</ol>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="content">
				<div className="container-fluid">
					{alert.show == true && (
						<Alert message={alert.message} type={alert.type} />
					)}
					<Outlet />
				</div>
			</div>
		</div>
	)
}
export default MainApp
