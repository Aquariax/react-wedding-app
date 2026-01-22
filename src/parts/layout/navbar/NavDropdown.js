
import NavDropdownItem from './NavDropdownitem';
import { NavLink } from 'react-router-dom';



	
const NavDropdown = (props) => {
	return (
		<div className={props.texts}>
			
			<div className='nav-menu'>
				<NavDropdownItem><NavLink to="https://lexyandrobs.netlify.app//"><p className='menu-nav_link'>Home</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//wedding_day'><p className='menu-nav_link'>Wedding Day</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//our_story'><p className='menu-nav_link'>Our Story</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//travel'><p className='menu-nav_link'>Travel</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//gift_registry'><p className='menu-nav_link'>Gift Registry</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//FAQ'><p className='menu-nav_link'>Q&A</p></NavLink></NavDropdownItem>
				<NavDropdownItem><NavLink to='https://lexyandrobs.netlify.app//RSVP'><p className='menu-nav_link'>Rsvp</p></NavLink></NavDropdownItem>
			</div>
		</div>
	);
};

export default NavDropdown;