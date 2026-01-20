import React from 'react';

const NavDropdownitem = (props) => {
	return (
		<div href={props.linkName} className='nav-item' onClick={props.sett}>
			<span className='nav-button'>{props.leftIcon}</span>
			{props.children}
			<span className='nav-right'>{props.rightIcon}</span>
		</div>
	);
};

export default NavDropdownitem;