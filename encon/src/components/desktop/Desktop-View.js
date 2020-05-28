import React from 'react';
import { Calculator } from '../mobile/Calculator.js';
import { Register } from '../mobile/Register.js';
import '../../styles/desktop/Desktop-View.scss';

export const DesktopView = () => {
	return (
		<div className='desktopView'>
			<div className='leftContainer'>
				<div className='calc-banner2'>Energy Calculator</div>
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
