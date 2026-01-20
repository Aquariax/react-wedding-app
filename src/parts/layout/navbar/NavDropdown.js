import React from 'react';
import NavDropdownItem from './NavDropdownitem';
import { NavLink } from 'react-router-dom';
const NavDropdown = (props) => {
	return (
		<div className={props.texts}>
			
			<div className='nav-menu'>
				<NavDropdownItem><NavLink to='/'><p className='menu-nav_link'>Home</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/wedding_day'><p className='menu-nav_link'>Wedding Day</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/our_story'><p className='menu-nav_link'>Our Story</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/travel'><p className='menu-nav_link'>Travel</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/gift_registry'><p className='menu-nav_link'>Gift Registry</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/FAQ'><p className='menu-nav_link'>Q&A</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='/RSVP'><p className='menu-nav_link'>Rsvp</p></NavLink></NavDropdownItem>
			</div>
		</div>
	);
};

export default NavDropdown;