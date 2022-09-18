import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../app/states/auth'
import { useLoginMutation } from '../services/auth.service'
import Alert from '../components/Alert'

const index = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	const from = location.state?.from?.pathname || '/servicios'

	const [login, { isLoading, isError, error, data, isSuccess }] =
		useLoginMutation()

	const [username, setUsername] = useState('203102')
	const [password, setPassword] = useState('203102-siiup')

	const usernameRef = useRef()

	useEffect(() => {
		usernameRef.current.focus()
	}, [])

	const handleLogin = async (e) => {
		e.preventDefault()
		const response = await login({ username, password })
		if (response.data) {
			dispatch(
				setCredentials({
					user: {
						username: response.data?.username,
						email: response.data?.email,
						roles: response.data?.roles,
					},
					accessToken: {
						access: response.data?.access,
						refresh: response.data?.refresh,
					},
				})
			)
			setPassword('')
			setUsername('')
			navigate(from, { replace: true })
		}
	}

	const handleLoginFake = (e) => {
		e.preventDefault()
		dispatch(
			setCredentials({
				user: {
					id: 1,
					username: 'kevin',
					email: 'kevin@gmail.com',
					roles: ['ADMIN'],
				},
				accessToken: {
					access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYzNDY1MjczLCJpYXQiOjE2NjM0NjE2NzMsImp0aSI6IjliZDg2YzU5YTk2ZTRmNzI4NjRlNzFjODNhODM3OWUzIiwidXNlcl9pZCI6MX0.6KtJVLWq3UfnT1RRB4NFCRduhE_J3k9c1n7U22j_UFQ',
					refresh:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY2MzQ4MzI3MywiaWF0IjoxNjYzNDYxNjczLCJqdGkiOiI1ODMzNmZmYmQyMzI0MjM3YTQ0NGI2NGNlZDg2NjYyNiIsInVzZXJfaWQiOjF9.0v2iemtVj3kNysO_ttD1WKhzrhilhVOWGU7onIaudaw',
				},
			})
		)
		setPassword('')
		setUsername('')
		navigate(from, { replace: true })
	}

	return (
		<div className="login-page ">
			<div className="login-box">
				<div className="card card-outline card-primary">
					<div className="card-header text-center">
						<Link to={'/'} className="h1">
							<b>SIIUP</b>
						</Link>
					</div>
					<div className="card-body">
						<p className="login-box-msg">
							Sign in to start your session
						</p>
						<form onSubmit={handleLoginFake}>
							<div className="input-group mb-3">
								<input
									type="text"
									className="form-control"
									placeholder="Username"
									value={username}
									ref={usernameRef}
									onChange={({ target }) =>
										setUsername(target.value)
									}
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-envelope" />
									</div>
								</div>
							</div>
							<div className="input-group mb-3">
								<input
									type="password"
									className="form-control"
									placeholder="Password"
									value={password}
									onChange={({ target }) =>
										setPassword(target.value)
									}
								/>
								<div className="input-group-append">
									<div className="input-group-text">
										<span className="fas fa-lock" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-8">
									<div className="icheck-primary">
										<input type="checkbox" id="remember" />
										<label htmlFor="remember">
											Remember Me
										</label>
									</div>
								</div>
								<div className="col-4">
									<button className="btn btn-primary btn-block">
										{isLoading ? 'Loading' : 'Sign In'}
									</button>
								</div>
							</div>
							{isError && (
								<Alert
									type={'alert-danger'}
									message={error?.error}
									style={{ marginTop: 10 }}
								/>
							)}
						</form>
						<p className="mb-1">
							<Link to={'/forgot-password'}>
								I forgot my password
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default index
