import React from 'react';
import { Register } from '../mobile/Register.js';
import { HeaderAlt } from '../mobile/Header-Alt.js';
import { DesktopNav } from '../desktop/Desktop-Nav.js';

export const DesktopRegister = () => {
	return (
		<div>
			<DesktopNav />
			<Register />
		</div>
	);
};
