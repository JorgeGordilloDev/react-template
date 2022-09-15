import FooterApp from './FooterApp'
import MainApp from './MainApp'
import NavbarApp from './NavbarApp'
import SliderApp from './SliderApp'

const AppLayout = () => {
	return (
		<>
			<NavbarApp />
			<SliderApp />
			<MainApp />
			<FooterApp />
		</>
	)
}
export default AppLayout
