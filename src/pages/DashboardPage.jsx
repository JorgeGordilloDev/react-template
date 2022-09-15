import { useDispatch } from 'react-redux'
import { setTitle, setBreadcrumb } from '../app/states/meta'
import { useEffect } from 'react'

const DashboardPage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setTitle('Dashboard'))
		dispatch(
			setBreadcrumb(() => (
				<li className="breadcrumb-item active">Dashboard</li>
			))
		)
	}, [])

	return <div>DashboardPage</div>
}
export default DashboardPage
