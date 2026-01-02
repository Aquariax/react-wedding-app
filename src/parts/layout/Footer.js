import React from 'react';
import img from '../pictures/IMG_6754.JPG';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer_sec_about'>
					<div className="footer_emblem">
						<img src={img} alt='couple emblem' className='img2' />
					</div>
					
					<p>
						We are glad to celebrate our union with all of you and thank you for your time and commitment to our growing relationship!
					</p>
				</div>
				<div className='footer_sec_contact '>
					<h3>Get In Touch</h3>
					<a href='#!'>
						<i className='fas fa-envelope'></i> lexyandrobert@gmail.com
					</a>
				</div>
				<div className='footer_sec_info'>
					<h3>Useful Links</h3>
					<a href='#'>
						<i className='fas fa-book'></i> FAQ
					</a>
				</div>
			</div>
			<div className='footer_extension'>
				<div>
					<p>Excited To See You 2026!</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;