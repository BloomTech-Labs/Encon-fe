import React from 'react';
import { Redirect } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
	const userToken = localStorage.getItem('USER_TOKEN');

	return userToken ? children : <Redirect to='/login' />;
};
