

const NavDropdownitem = (props) => {
	return (
		<div href={props.linkName} className='nav-item' onClick={props.set}>
			{props.children}
		</div>
	);
};

export default NavDropdownitem;