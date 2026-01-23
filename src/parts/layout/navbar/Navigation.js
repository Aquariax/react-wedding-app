import  { useState } from 'react';
import NavBar from './Navbar';
import NavItem from './NavItem';
import NavLinks from './NavLinks';
import NavDropdown from './NavDropdown';
import Roses from "../../pictures/IMG_5725.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const Navigation = () => {
	const [state, setState] = useState({
		open: false,
		text: 'dropdown',
		bodyChange: ""
	});
	const setter = () => {
		!state.open
		? setState({ open: true, text: 'dropdownClose', bodyChange: document.body.classList.add('no_scroll') } )
		: setState({ open: false, text: 'dropdown',bodyChange: document.body.classList.remove('no_scroll') });
	};

	return (
		<div className="desktop_navigation">
			<div className='logo'>
			<	img src={Roses} alt='couples emblem' className='couple_icon' />
			</div>
			<NavBar>
				<NavLinks />
				<NavItem
					icon={<FontAwesomeIcon className="burger" icon="fas fa-bars special"/>}
					set={setter}
					opened={state.open}
				/>
				<NavDropdown texts={state.text} set={setter} opened={state.open}/>
			</NavBar>
			
		</div>
	);
};

export default Navigation;