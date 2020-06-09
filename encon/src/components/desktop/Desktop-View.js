import React from 'react';
import { Calculator } from '../mobile/Calculator.js';
import OktaLogin from '../mobile/OktaLogin.js';
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
					
					<OktaLogin/>

				</div>
			</div>
		</div>
	);
};
