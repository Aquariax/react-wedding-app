import React, { useState } from 'react';
import NavBar from './Navbar';
import NavItem from './NavItem';
import NavLinks from './NavLinks';
import NavDropdown from './NavDropdown';
import Roses from "../../pictures/IMG_5725.JPG"
const Navigation = () => {
	const [state, setState] = useState({
		open: false,
		text: 'dropdown',
	});
	const setter = () => {
		!state.open
			? setState({ open: true, text: 'dropdownClose' })
			: setState({ open: false, text: 'dropdown' });
	};

	return (
		<div className="desktop_navigation">
			<div className='logo'>
			<	img src={Roses} alt='couples emblem' className='couple_icon' />
			</div>
			<NavBar>
				<NavLinks />
				<NavItem
					icon={<i className='fas fa-bars special'></i>}
					set={setter}
					opened={state.open}
				/>
				<NavDropdown texts={state.text}/>
			</NavBar>
			
		</div>
	);
};

export default Navigation;