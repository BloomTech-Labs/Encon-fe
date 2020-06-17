import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import '../../styles/mobile/Register.scss';
import { HeaderAlt } from './Header-Alt.js';
import { useHistory } from 'react-router-dom';
import { ErrorMessage } from './Error-Message.js';

export const Register = () => {
	const {
		errors,
		formState,
		getValues,
		handleSubmit,
		register,
		triggerValidation,
	} = useForm();
	const [RegisterError, setRegisterError] = useState();
	const baseUrl = '';
	const history = useHistory();

	const onRegisterSubmit = (data) => {
		axios
			.post(baseUrl + '/auth/register', {
				name: data.name,
				email: data.email,
				state: data.state,
				password: data.password,
				repeatPassword: data.repeatPassword,
			})
			.then(() => {
				history.push('/profile');
			})
			.catch((err) => {
				setRegisterError(
					'Registration Error: ' + err.response.data.error.message
				);
			});
	};
	console.log(errors);

	const verifyPassword = (repeatPassword) =>
		repeatPassword === getValues().password || 'Passwords do not match';
	const validatePassword = () => {
		if (formState.isSubmitted) {
			triggerValidation({ name: 'repeatPassword' });
		}
	};

	return (
		<div className='register-container'>
			<HeaderAlt />
			<form className='registerForm' onSubmit={handleSubmit(onRegisterSubmit)}>
				<label htmlFor='name' className='label'>
					Name
				</label>
				<input
					className='input'
					type='text'
					name='name'
					// placeholder='Name'
					ref={register({ required: true, minLength: 1, maxLength: 100 })}
				/>
				<ErrorMessage error={errors.name} />
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
				<label htmlFor='state' className='label'>
					State
				</label>
				<select
					className='select-state'
					name='state'
					ref={register({ required: true })}
				>
					<option disabled selected value=''>
						Select
					</option>
					<option value='Alabama'>Alabama</option>
					<option value='Alaska'>Alaska</option>
					<option value='Arizona'>Arizona</option>
					<option value='Arkansas'>Arkansas</option>
					<option value='California'>California</option>
					<option value='Colorado'>Colorado</option>
					<option value='Connecticut'>Connecticut</option>
					<option value='Delaware'>Delaware</option>
					<option value='District Of Columbia'>District Of Columbia</option>
					<option value='Florida'>Florida</option>
					<option value='Georgia'>Georgia</option>
					<option value='Hawaii'>Hawaii</option>
					<option value='Idaho'>Idaho</option>
					<option value='Illinois'>Illinois</option>
					<option value='Indiana'>Indiana</option>
					<option value='Iowa'>Iowa</option>
					<option value='Kansas'>Kansas</option>
					<option value='Kentucky'>Kentucky</option>
					<option value='Louisiana'>Louisiana</option>
					<option value='Maine'>Maine</option>
					<option value='Maryland'>Maryland</option>
					<option value='Massachusetts'>Massachusetts</option>
					<option value='Michigan'>Michigan</option>
					<option value='Minnesota'>Minnesota</option>
					<option value='Mississippi'>Mississippi</option>
					<option value='Missouri'>Missouri</option>
					<option value='Montana'>Montana</option>
					<option value='Nebraska'>Nebraska</option>
					<option value='Nevada'>Nevada</option>
					<option value='New Hampshire'>New Hampshire</option>
					<option value='New Jersey'>New Jersey</option>
					<option value='New Mexico'>New Mexico</option>
					<option value='New York'>New York</option>
					<option value='North Carolina'>North Carolina</option>
					<option value='North Dakota'>North Dakota</option>
					<option value='Ohio'>Ohio</option>
					<option value='Oklahoma'>Oklahoma</option>
					<option value='Oregon'>Oregon</option>
					<option value='Pennsylvania'>Pennsylvania</option>
					<option value='Rhode Island'>Rhode Island</option>
					<option value='South Carolina'>South Carolina</option>
					<option value='South Dakota'>South Dakota</option>
					<option value='Tennessee'>Tennessee</option>
					<option value='Texas'>Texas</option>
					<option value='Utah'>Utah</option>
					<option value='Vermont'>Vermont</option>
					<option value='Virginia'>Virginia</option>
					<option value='Washington'>Washington</option>
					<option value='West Virginia'>West Virginia</option>
					<option value='Wisconsin'>Wisconsin</option>
					<option value='Wyoming '>Wyoming</option>
				</select>
				<ErrorMessage error={errors.state} />
				<label htmlFor='password' className='label'>
					Password
				</label>
				<input
					type='password'
					name='password'
					// placeholder='Password'
					ref={register({ required: true })}
					onChange={validatePassword}
				/>
				<ErrorMessage error={errors.password} />
				<label htmlFor='verifyPassword' className='label'>
					Verify Password
				</label>
				<input
					type='password'
					name='repeatPassword'
					// placeholder='Verify Password'
					ref={register({
						required: true,
						validate: verifyPassword,
					})}
				/>
				{errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
				<button className='app-buttons' type='submit'>
					Register
				</button>
				<div>{RegisterError}</div>
			</form>
		</div>
	);
};

// import * as Yup from 'yup';
// import { withFormik, Form, Field } from 'formik';
// const SignUp = ({ values, errors, touched, isSubmitting }, props) => (
// 	<div className='register-container'>
// 		<HeaderAlt />
// 		<Form>
// 			<div>
// 				<label htmlFor='name' className='label'>
// 					Name
// 				</label>
// 				<Field type='text' name='name' className='input' />
// 				{touched.name && errors.name && <p>{errors.name}</p>}
// 			</div>
// 			<div>
// 				<label htmlFor='email' className='label'>
// 					Email
// 				</label>
// 				<Field type='text' name='email' className='email' />
// 				{touched.email && errors.email && <p>{errors.email}</p>}
// 			</div>

// 			<div>
// 				<label htmlFor='password' className='label'>
// 					Password
// 				</label>
// 				<Field type='password' name='password' className='input' />
// 				{touched.password && errors.password && <p>{errors.password}</p>}
// 			</div>

// 			<div>
// 				<label htmlFor='zip' className='label'>
// 					State
// 				</label>
// 				<Field type='text' name='zip' className='input' />
// 				{touched.zip && errors.zip && <p>{errors.zip}</p>}
// 			</div>
// 			<button className='app-buttons' type='submit'>
// 				Register
// 			</button>
// 		</Form>
// 	</div>
// );

// export const Register = withFormik({
// 	mapPropsToValues({ name, email, password, zip }) {
// 		return {
// 			name: name || '',
// 			email: email || '',
// 			password: password || '',
// 			zip: zip || '',
// 		};
// 	},
// 	validationSchema: Yup.object().shape({
// 		name: Yup.string().min(4).required('must be 4+ chars long'),
// 		email: Yup.string().min(4).required('must be 4+ chars long'),
// 		password: Yup.string().min(4).required('must be 4+ chars long'),
// 		zip: Yup.string().min(5).required('must be 5+ chars long'),
// 	}),
// 	handleSubmit(
// 		values,
// 		{ resetForm, setErrors, setSubmitting, setStatus, props }
// 	) {
// 		console.log(values);

// 		resetForm();
// 		props.history.push('/login');

// 		setSubmitting(false);

// 		axios
// 			.post('https://encon.aws.com/api/auth/register', values)
// 			.then((res) => {
// 				console.log('axios', res);
// 				setStatus(res.data);
// 			})
// 			.catch((err) => console.log('error', err));
// 	},
// })(SignUp);
