import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Login.scss';
import { Headeralt } from '../components/Headeralt.js';

export const Login = () => {
	const { handleSubmit, register, errors } = useForm();
	const onSubmit = (e) => {
		e.persist();
		setUser({
			...user,
			[e.target.email]: e.target.value,
		});
	};

	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	return (
		<div className='login-container'>
			<Headeralt />
			<form onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='email' className='label'>
					Email
				</label>

				<input
					className='email'
					name='email'
					ref={register({
						required: 'Required',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'invalid email address',
						},
					})}
				/>
				{errors.email && errors.email.message}
				<br />
				<label htmlFor='password' className='label'>
					Password
				</label>

				<input name='password' type='password' ref={register} />
				<br />

				<button type='submit'>Sign In</button>
			</form>
		</div>
	);
};
