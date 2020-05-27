import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import { Login } from './components/LogIn.js';
import { Register } from './components/Register.js';
import { Navigation } from './components/Navigation.js';
import { LandingPage } from './components/Landing-Page';
import { LogoHeader } from './components/Logo-Header';
import { DesktopView } from './components/Desktop-View';
import { NavDesktop } from './components/Nav-Desktop.js';
import MediaQuery from 'react-responsive';

const App = () => {
	return (
		<div className='App'>
			<MediaQuery maxDeviceWidth={1025}>
				<Navigation />
			</MediaQuery>
			<LogoHeader />
			<Route exact path='/'>
				<MediaQuery minDeviceWidth={1025}>
					<NavDesktop />
					<DesktopView />
				</MediaQuery>
				<MediaQuery maxDeviceWidth={1025}>
					<LandingPage />
				</MediaQuery>
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
