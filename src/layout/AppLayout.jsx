import FooterApp from './FooterApp'
import MainApp from './MainApp'
import NavbarApp from './NavbarApp'
import SliderApp from './SliderApp'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
	return (
		<>
			<NavbarApp />
			<SliderApp />
			<Outlet />
			<FooterApp />
		</>
	)
}
export default AppLayout
