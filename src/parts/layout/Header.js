import React from 'react';
import { useCountdown } from './Countdown'
const Header = () => {
	return (
		<div className='banner'>
			<div className="banner_window">
				<h2>The wedding of</h2>
				<h1>Lexy and Robert</h1>
				<h3>September 26, 2026 | Powell Butte, OR</h3>
				{useCountdown("09-26-2026") }
				<a href="https://docs.google.com/forms/d/e/1FAIpQLSexCXYTW3yNviF-CAhSGysRuy_YayTRnk1_OAnFexv8g895WA/viewform?embedded=true" className="rsvp">RSVP</a>
			</div>
		</div>
	);
};
export default Header;