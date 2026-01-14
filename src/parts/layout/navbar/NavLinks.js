import React from 'react';
import NavLinkItem from './NavLinkItem';
import RSVP from "../pages/RSVP"
import { NavLink } from 'react-router-dom';

const websitelink= ("http://localhost:3000/")
const NavLinks = () => {
	return (
		<div className='nav-links'>
			<div className='nav-auth'>
				<NavLink to='/'><p class='menu-nav_link'>Home</p></NavLink>
				<NavLink to='/wedding_day'><p class='menu-nav_link'>Wedding Day</p></NavLink>
				<NavLink to='/our_story'><p class='menu-nav_link'>Our Story</p></NavLink>
				<NavLink to='/travel'><p class='menu-nav_link'>Travel</p></NavLink>
				<NavLink to='/gift_registry'><p class='menu-nav_link'>Gift Registry</p></NavLink>
				<NavLink to='/FAQ'><p class='menu-nav_link'>Q&A</p></NavLink>
				<NavLink to='/RSVP'><p class='menu-nav_link'>Rsvp</p></NavLink>
			</div>
		</div>
	);
};

export default NavLinks;