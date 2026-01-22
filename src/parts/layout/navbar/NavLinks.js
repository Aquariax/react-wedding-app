import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<div className='nav-links'>
			<div className='nav-auth'>
				<NavLink to='https://lexyandrobs.netlify.app//'><p className='menu-nav_link'>Home</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//wedding_day'><p className='menu-nav_link'>Wedding Day</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//our_story'><p className='menu-nav_link'>Our Story</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//travel'><p className='menu-nav_link'>Travel</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//gift_registry'><p className='menu-nav_link'>Gift Registry</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//FAQ'><p className='menu-nav_link'>Q&A</p></NavLink>
				<NavLink to='https://lexyandrobs.netlify.app//RSVP'><p className='menu-nav_link'>Rsvp</p></NavLink>
			</div>
		</div>
	);
};

export default NavLinks;