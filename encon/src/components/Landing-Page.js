import React from 'react';
import '../styles/Landing-Page.scss';
import { Header } from '../components/Header.js';
import { Calculator } from './Calculator';

export const LandingPage = () => {
	return (
		<div className='landing-page-container'>
			<Header />
			<Calculator />
		</div>
	);
};
