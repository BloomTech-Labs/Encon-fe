import React from 'react';
import { Calculator } from './Calc-Desktop';
import { Register } from './Register-Desktop';


import '../styles/Desktop-View.scss';
export const DesktopView = () => {
	return (
		<div className='desktopView'>
			<div className='leftContainer'>
				<div className='calc-banner'>Energy Calculator</div>
				<div className='calcContainer'>
					<Calculator />
				</div>
			</div>
			<div className='rightContainer'>
				<div className='registerContainer'>
					<Register />
				</div>
			</div>
		</div>
	);
};
