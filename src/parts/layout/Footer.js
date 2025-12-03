import React from 'react';
import img from '../pictures/roses.png';

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer_sec about'>
					<img src={img} alt='couple emblem' className='img2' />
					<p>
						We are glad to celebrate the union of these two parties with all of you and thank you for your company!
					</p>
				</div>
				<div className='footer_sec contact '>
					<h3>Get in touch</h3>
					<a href='#!'>
						<i className='fas fa-envelope'></i> lexyandrobert@gmail.com
					</a>
				</div>
				<div className='footer_sec info'>
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
				<div className='footer_extension_row'>
					<a href='#'></a>
					<p>
						<strong>|</strong>
                </p>
					<a href='#'></a>
				</div>
			</div>
		</div>
	);
};

export default Footer;