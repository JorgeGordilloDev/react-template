import { Link } from 'react-router-dom'

const NotFoundPage = () => {
	return (
		<div className="error-page mt-5">
			<h2 className="headline text-warning">404</h2>

			<div className="error-content">
				<h3>
					<i className="fas fa-exclamation-triangle text-warning"></i>{' '}
					Oops! Page not found.
				</h3>

				<p className="mt-4">
					We could not find the page you were looking for. Meanwhile,
					you may <Link to={'/'}>return to dashboard</Link> or try
					using the search form.
				</p>
			</div>
		</div>
	)
}
export default NotFoundPage
