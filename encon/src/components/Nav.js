import React from 'react';
import '../styles/Nav.scss';

import logo from '../assets/EnCon-logo.png';

export const Nav = () => {
	return (
		<div className='nav-container'>
			<div className='nav-header'></div>
			<img className='nav-logo' src={logo} alt='Logo' />
		</div>
	);
};
