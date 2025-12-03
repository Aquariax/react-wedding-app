import React from 'react';

const NavItem = (props) => {
	return (
		<li className='nav-item'>
			<a href='#' className='nav-button' onClick={props.set}>
				{props.icon}
			</a>
			{props.opened && props.children}
		</li>
	);
};

export default NavItem;