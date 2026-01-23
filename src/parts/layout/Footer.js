import img from '../pictures/IMG_6754.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom';

library.add(fas, far, fab)

const Footer = () => {
	return (
		<div>
			<div className='footer'>
				<div className='footer_sec_about'>
					<div className="footer_emblem">
						<img src={img} alt='couple emblem' className='img2' />
					</div>
					<div className="blurb">
						<h3>Thank You for Your Support</h3>
						<p>We are glad to celebrate our union with all of you and thank you for your time and commitment to our growing relationship!</p>
					</div>
					
				</div>
				<div className='footer_sec_contact '>
					<h3>Get In Touch</h3>
					<a href='mailto:Lexyandrobert@gmail.com'>
						<FontAwesomeIcon icon="fa-solid fa-envelope" /> lexyandrobert@gmail.com
					</a>
				</div>
				<div className='footer_sec_info'>
					<h3>Useful Links</h3>
					<NavLink to='/FAQ'><FontAwesomeIcon icon="fas fa-info-circle" />FAQ</NavLink>
					
				</div>
			</div>
			<div className='footer_extension'>
				<div>
					<p className='excitement'>Excited To See You This September!</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;