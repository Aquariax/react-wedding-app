
import NavDropdownItem from './NavDropdownitem';
import { NavLink } from 'react-router-dom';



	
const NavDropdown = (props) => {
	return (
		<div className={props.texts}>
			<div className='nav-menu'>
				<NavLink to="/"><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Home</p></NavDropdownItem></NavLink>
				<NavLink to='/wedding_day' ><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Wedding Day</p></NavDropdownItem></NavLink>
				<NavLink to='/our_story'><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Our Story</p></NavDropdownItem></NavLink>
				<NavLink to='/travel'><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Travel</p></NavDropdownItem></NavLink>
				<NavLink to='/gift_registry'><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Gift Registry</p></NavDropdownItem></NavLink>
				<NavLink to='/FAQ'><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Q&A</p></NavDropdownItem></NavLink>
				<NavLink to='/RSVP'><NavDropdownItem><p className='menu-nav_link' onClick={props.set}>Rsvp</p></NavDropdownItem></NavLink>
			</div>
		</div>
	);
};

export default NavDropdown;