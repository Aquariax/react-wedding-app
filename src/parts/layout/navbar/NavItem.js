import React from 'react';

const NavItem = (props) => {
	return (
		<p className='nav-item'>
			<a href='#' className='nav-button' onClick={props.set}>
				{props.icon}
			</a>
			{props.opened && props.children}
		</p>
	);
};

export default NavItem;