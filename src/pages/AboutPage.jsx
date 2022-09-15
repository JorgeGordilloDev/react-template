import { useDispatch } from 'react-redux'
import { setTitle, setBreadcrumb } from '../app/states/meta'
import { useEffect } from 'react'

const AboutPage = () => {
	const dispatch = useDispatch()

	// Hook para actualizar el titulo
	// y el breadcrumb de cada pagina
	useEffect(() => {
		dispatch(setTitle('Acerda de'))
		dispatch(
			setBreadcrumb(() => (
				<li className="breadcrumb-item active">Acerca de</li>
			))
		)
	}, [])

	return <div>AboutPage</div>
}
export default AboutPage
