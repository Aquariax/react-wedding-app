import React from 'react';

const NavLinkItem = (props) => {
	return (
		<a href={props.link} className={`nav-link-item ${props.class}`}>
			{props.linkItem} {props.icon}
		</a>
	);
};

export default NavLinkItem;