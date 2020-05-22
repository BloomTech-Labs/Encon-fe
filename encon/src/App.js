import React from 'react';
import './App.scss';
import { Login } from './components/LogIn.js';
import { Register } from './components/Register.js';
import { Navigation } from './components/Navigation.js';
import { Route } from 'react-router-dom';
import { LandingPage } from './components/Landing-Page';

export const App = () => {
	return (
		<div className='App'>
			<Navigation />
			<Route exact path='/'>
				<LandingPage />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
		</div>
	);
};
