import React from 'react';
import NavLinkItem from './NavLinkItem';

const NavLinks = () => {
	return (
		<div className='nav-links'>
			<div className='nav-auth'>
				<NavLinkItem
                	linkItem='Wedding Day'
					class='menu-nav_link'
					link='#'                
				/>
                <NavLinkItem
                	linkItem='Attire'
					class='menu-nav_link'
					link='#'                
				/>
                <NavLinkItem
                	linkItem='Schedule'
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
					link='#'                
				/>
                <NavLinkItem
					linkItem='Invite Code'
					class='menu-nav_link'
					link='#'
				/>
                
			</div>
		</div>
	);
};

export default NavLinks;