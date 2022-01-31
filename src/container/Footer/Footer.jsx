import React from "react";
import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import "./Footer.css";

const Footer = () => (
	<div className='app__footer section__padding' id='login'>
		<FooterOverlay />
		<Newsletter />

		<div className='app__footer-links'>
			<div className='app__footer-links_contact'>
				<h2 className='app__footer-headtext'>Contact Us</h2>
				<p className='p__opensans'>9 W 53rd St, New York NY 10019, USA</p>
				<p className='p__opensans'>+1 212-344-1239</p>
				<p className='p__opensans'>+1 212-555-1230</p>
			</div>

			<div className='app__footer-links_logo'>
				<img src={images.gericht} alt='footer logo' />
				<p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
				<img src={images.spoon} alt='footer spoon' className='spoon__img' style={{ margin: 15 }} />
				<div className='app__footer-links_icons'>
					<FiFacebook />
					<FiTwitter />
					<FiInstagram />
				</div>
			</div>

			<div className='app__footer-links_work'>
				<h2 className='app__footer-headtext'>Working Hours</h2>
				<p className='p__opensans'>Monday - Friday</p>
				<p className='p__opensans'>8:00am - 12:00am</p>
				<p className='p__opensans'>Saturday - Sunday</p>
				<p className='p__opensans'>7:00am - 11:00pm</p>
			</div>
		</div>

		<div className='footer__copywrite'>
			<p className='p__opensans'>2022 Gericht. All Rights Reserved</p>
		</div>
	</div>
);

export default Footer;
