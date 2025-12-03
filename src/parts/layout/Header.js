import React from 'react';
import header from '../pictures/lotus.png';
const Header = () => {
	return (
		<div className='banner'>
			<img src={header} alt='Picture of couple engagement photoshoot' className='img' />
		</div>
	);
};

export default Header;