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
					link={`${websitelink}weddingday`}       
				/>
                <NavLinkItem
                	linkItem='Our Story'
					class='menu-nav_link'
					link={`${websitelink}our_story`}                 
				/>
                <NavLinkItem
                	linkItem='Travel'
					class='menu-nav_link'
					link={`${websitelink}travel`}                 
				/>
                <NavLinkItem
                	linkItem='Gift Regisrty'
					class='menu-nav_link'
					link={`${websitelink}gift_registry`}                
				/>
				<NavLinkItem
                	linkItem='Q&A'
					class='menu-nav_link'
					link={`${websitelink}FAQ`}              
				/>

				<NavLinkItem
                	linkItem='Rsvp'
					class='menu-nav_link'
					link="https://docs.google.com/forms/d/e/1FAIpQLSexCXYTW3yNviF-CAhSGysRuy_YayTRnk1_OAnFexv8g895WA/viewform?embedded=true"                
				/>
                
			</div>
		</div>
	);
};

export default NavLinks;