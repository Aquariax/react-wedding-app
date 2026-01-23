
import  {useCountdown}  from './Countdown'
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<div className='banner'>
			<div className="banner_window">
				<h2>The wedding of</h2>
				<h1>Lexy and Robert</h1>
				<h3>September 26, 2026 | Powell Butte, OR</h3>
				{useCountdown(1790465400000)}
				<NavLink to='/RSVP'><p className="rsvp">RSVP</p></NavLink>
			</div>
		</div>
	);
};
export default Header;