import React from 'react';
import '../../styles/mobile/Navigation.scss';
import Menu from 'react-burger-menu/lib/menus/stack';

export const Navigation = () => {
	const logOut = () => {
		localStorage.removeItem('AUTH_TOKEN');
	};

	return (
		<Menu
			right
			width={'25rem'}
			htmlClassName={'nav-overflow'}
			bodyClassName={'nav-overflow'}
		>
			<div className='bm-item-list'>
				<a className='bm-item' href='/'>
					Home
				</a>
				<a className='bm-item' href='/login'>
					Login
				</a>
				<a className='bm-item' href='/register'>
					Register
				</a>
				<a className='bm-item' href='/profile'>
					Profile
				</a>
				<a className='bm-item' href='/' onClick={logOut}>
					Log Out
				</a>
			</div>
		</Menu>
	);
};
