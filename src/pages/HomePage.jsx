import { useDispatch } from 'react-redux'
import { setTitle, setBreadcrumb } from '../app/states/meta'
import { useEffect } from 'react'

const HomePage = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setTitle(''))
		dispatch(setBreadcrumb(() => null))
	}, [])

	return <div>HomePage</div>
}
export default HomePage
