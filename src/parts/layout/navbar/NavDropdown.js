import React from 'react';
import NavDropdownItem from './NavDropdownitem';
const NavDropdown = (props) => {
	return (
		<div className={props.texts}>
			<div className='nav-menu'>
				<NavDropdownItem
					leftIcon={<i className='fas fa-globe-europe'></i>}
					rightIcon={<i className='fas fa-chevron-down'></i>}
                    linkName='#'
				>
					Wedding Day
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-user-plus'></i>}
					linkName='#'
				>
					Attire
				</NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-sign-in-alt'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
					linkName='#'
				>
					Schedule
				</NavDropdownItem>
                <NavDropdownItem
					leftIcon={<i className='fas fa-sign-in-alt'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
					linkName='#'
				>
                    Travel
                </NavDropdownItem>
                <NavDropdownItem
					leftIcon={<i className='fas fa-sign-in-alt'></i>}
					rightIcon={<i className='fas fa-chevron-right'></i>}
					linkName='#'
				>
                    Gift Registry
                </NavDropdownItem>
				<NavDropdownItem
					leftIcon={<i className='fas fa-toolbox'></i>}
					linkName='#'
					sett={props.set}
				>
					Invite Code
				</NavDropdownItem>
			</div>
		</div>
	);
};

export default NavDropdown;