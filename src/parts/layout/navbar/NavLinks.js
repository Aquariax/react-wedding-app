import React from 'react';
import NavLinkItem from './NavLinkItem';

const websitelink= ("http://localhost:3000/")
const NavLinks = () => {
	return (
		<div className='nav-links'>
			<div className='nav-auth'>
				<NavLinkItem
                	linkItem='Home'
					class='menu-nav_link'
					link={websitelink}                
				/>
				<NavLinkItem
                	linkItem='Wedding Day'
					class='menu-nav_link'
					link={`${websitelink}/weddingday`}       
				/>
                <NavLinkItem
                	linkItem='Our Story'
					class='menu-nav_link'
					link='#'                
				/>
                <NavLinkItem
                	linkItem='Travel'
					class='menu-nav_link'
					link='#'                
				/>
                <NavLinkItem
                	linkItem='Gift Regisrty'
					class='menu-nav_link'
					link='loaclhost:3000'                
				/>
				<NavLinkItem
                	linkItem='Q&A'
					class='menu-nav_link'
					link='#'                
				/>
				<NavLinkItem
                	linkItem='Rsvp'
					class='menu-nav_link'
					link='#'                
				/>
                
			</div>
		</div>
	);
};

export default NavLinks;