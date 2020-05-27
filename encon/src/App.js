import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Navigation } from './components/Navigation.js';
import { LandingPage } from './components/Landing-Page';
import { LogoHeader } from './components/Logo-Header';

const App = () => {
	return (
		<div className='App'>
			<Navigation />
			<LogoHeader />
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

export default App;
