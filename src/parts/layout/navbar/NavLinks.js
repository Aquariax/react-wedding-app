import React from 'react';
import NavLinkItem from './NavLinkItem';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const websitelink= ("http://localhost:3000/")
const NavLinks = () => {
	return (
		<div className='nav-links'>
			<div className='nav-auth'>
				<NavLinkItem
                	linkItem='Home'
					class='menu-nav_link'              
				></NavLinkItem>
				<NavLinkItem linkItem='Wedding Day' class='menu-nav_link'>
					<Link to="/wedding_day" className="Nav-link">About</Link>
				</NavLinkItem>
                <NavLinkItem
                	linkItem='Our Story'
					class='menu-nav_link'             
				></NavLinkItem>
                <NavLinkItem
                	linkItem='Travel'
					class='menu-nav_link'              
				></NavLinkItem>
                <NavLinkItem
                	linkItem='Gift Regisrty'
					class='menu-nav_link'             
				></NavLinkItem>
				<NavLinkItem
                	linkItem='Q&A'
					class='menu-nav_link'            
				></NavLinkItem>
				<NavLinkItem
                	linkItem='Rsvp'
					class='menu-nav_link'
					link="https://docs.google.com/forms/d/e/1FAIpQLSexCXYTW3yNviF-CAhSGysRuy_YayTRnk1_OAnFexv8g895WA/viewform?embedded=true"                
				></NavLinkItem>
                
			</div>
		</div>
	);
};

export default NavLinks;