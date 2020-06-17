import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/mobile/Login.scss';
import { useForm } from 'react-hook-form';
import { HeaderAlt } from './Header-Alt.js';
import { useHistory } from 'react-router-dom';
import { ErrorMessage } from './Error-Message.js';

export const Login = () => {
	const { handleSubmit, register, errors, reset } = useForm();
	const baseUrl = '';
	const [loginError, setLoginError] = useState();
	const history = useHistory();

	// const handleChange = (e) => {
	// 	setUser({
	// 		...user,
	// 		[e.target.name]: e.target.value,
	// 	});
	// };

	// const onSubmit = (data) => {
	// 	e.preventDefault();
	// 	axios
	// 		.post(baseUrl + '/auth/login',)
	// 		.then((res) => {
	// 			localStorage.setItem('token', res.data.token);

	// 			history.push('/profile');
	// 			console.log('user data', res.data.user);
	// 		})
	// 		.catch((err) => {
	// 			console.log('Error while logging in', err.response);
	// 		});
	// };

	// const [user, setUser] = useState({
	// 	email: '',
	// 	password: '',
	// });

	const onLoginSubmit = (data) => {
		axios
			.post(baseUrl + '/auth/login', {
				email: data.email,
				password: data.password,
			})
			.then((res) => {
				reset();
				localStorage.setItem('AUTH_TOKEN', res.data.token);
				localStorage.setItem('USER_ID', res.data.id);
				history.push('/profile');
			})
			.catch((err) => {
				setLoginError('Login Error: ' + err.response.data.error.message);
			});
	};
	console.log(errors);

	return (
		<div className='login-container'>
			<HeaderAlt />
			<form className='loginForm' onSubmit={handleSubmit(onLoginSubmit)}>
				<label htmlFor='email' className='label'>
					Email
				</label>
				<input
					type='email'
					name='email'
					// placeholder='Email'
					ref={register({ required: true, pattern: /^\S+@\S+$/i })}
				/>
				<ErrorMessage error={errors.email} />
				{errors.email && errors.email.message}
				<label htmlFor='password' className='label'>
					Password
				</label>
				<input
					type='password'
					name='password'
					// placeholder='Password'
					ref={register({ required: true })}
				/>
				<ErrorMessage error={errors.password} />
				<button className='app-buttons' type='submit' data-testid='sign in'>
					Sign In
				</button>
				<div>{loginError}</div>
			</form>
		</div>
	);
};
