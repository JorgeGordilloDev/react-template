import { useDispatch } from 'react-redux'
import { setAlert } from '../app/states/meta'

const Alert = ({ type = 'alert-success', message, style = {} }) => {
	const dispatch = useDispatch()

	const hnadleDismis = () => {
		dispatch(
			setAlert({
				message: '',
				type: '',
				show: false,
			})
		)
	}

	return (
		<div
			className={`alert ${type} alert-dismissible fade show`}
			style={style}
			role="alert"
		>
			<button
				type="button"
				className="close"
				aria-hidden="true"
				onClick={hnadleDismis}
			>
				<span className="text-white" aria-hidden="true">
					&times;
				</span>
			</button>
			{message}
		</div>
	)
}

export default Alert
