import React from 'react';
import './App.scss';
import { Nav } from './components/Nav.js';
import { Header } from './components/Header.js';


export const App = () => {
	return (
		<div className='App'>
      <Nav />
      <Header />
			<p>encon wow</p>
		</div>
	);
};
