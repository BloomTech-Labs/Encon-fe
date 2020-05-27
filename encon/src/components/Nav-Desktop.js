import React from 'react';
import '../styles/Desktop-Nav.scss';
import logo from '../assets/EnCon-logo.png';
import { Header } from './Desktop-Header.js';

import { NavbarBrand, NavLink } from 'reactstrap';

export const NavDesktop = (props) => {
	return (
		<div>
			<div className='desktop-nav-container'>
				<div className='desktop-nav-logo-container'>
					<NavbarBrand href='/'>
						<img className='desktop-encon-logo' src={logo} alt='Logo' />
					</NavbarBrand>
				</div>
				<div className='desktop-nav-link-container'>
					<NavLink className='desktop-nav-link' href='/'>
						Home
					</NavLink>
					<NavLink className='desktop-nav-link' href='/'>
						About
					</NavLink>
					<NavLink className='desktop-nav-link' href='/login'>
						Login
					</NavLink>
				</div>
			</div>
			<div className='desktop-nav-header'>

			<Header  />
			</div>
		</div>
	);
};
