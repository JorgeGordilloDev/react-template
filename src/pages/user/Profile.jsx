import { useDispatch } from 'react-redux'
import { setTitle, setBreadcrumb } from '../../app/states/meta'
import { useEffect } from 'react'

import { useUserQuery, useLazyUserQuery } from '../../services/users.service'

const Profile = () => {
	const dispatch = useDispatch()

	// * Documentacion
	// * https://redux-toolkit.js.org/rtk-query/api/created-api/hooks

	const { data, refetch } = useUserQuery()
	const [tigger, {}] = useLazyUserQuery()

	useEffect(() => {
		dispatch(setTitle('Perfil'))
		dispatch(
			setBreadcrumb(() => (
				<li className="breadcrumb-item active">Perfil</li>
			))
		)
	}, [])

	return (
		<div>
			Profile
			<p>{JSON.stringify(data)}</p>
		</div>
	)
}
export default Profile
