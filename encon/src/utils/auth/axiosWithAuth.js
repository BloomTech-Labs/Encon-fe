import axios from 'axios';

export const axiosWithAuth = () => {
	return axios.create({
		baseURL: '',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('USER_TOKEN'),
		},
	});
};
