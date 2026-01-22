

const NavItem = (props) => {
	return (
		<p className='nav-item'>
			<button className='nav-button' onClick={props.set}>
				{props.icon}
			</button>
			{props.opened && props.children}
		</p>
	);
};

export default NavItem;