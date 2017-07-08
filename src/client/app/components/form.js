import React from 'react';
import Input from './input';
import axios from 'axios';

let querystring = require('querystring');
let Cookie = require('../controllers/cookies');

let formStyle = {
	padding: 50,
	width: 250,
	minWidth: '25%',
	margin: 'auto',
	marginTop: 200,
	boxShadow: '0px 0px 10px -2px',
	background: 'white'
};

let data = {};

function handleSubmit(e) {
	e.preventDefault();

	let inputs = document.getElementsByTagName('INPUT');

	for (let i = 0; i < inputs.length; i++){
		data[inputs[i].getAttribute('name')] = inputs[i].value;
	}

	const validateEmail = (email) => {
		let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};

	const validatePassword = (password) => {
		let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
		return re.test(password);
	};

	if (validateEmail(data.email) && validatePassword(data.password)) {

		axios.post('http://localhost:3001/api/users', querystring.stringify(data),
			{headers: {"Content-Type": "application/x-www-form-urlencoded"}},)
			.then(function(res) {
				Cookie.write('JWT', res.data, 2);
			})
			.catch(function (error) {
				console.log('whopper ', error);
			});

	} else if (!validateEmail(data.email)) {
		alert('Invalid email address');
	} else if (!validatePassword(data.password)) {
		alert('Password must be 8 characters, numbers and include upper and lower case letters');
	}
}


export const Form = (text) => (
	<form id="access" style={formStyle} onSubmit={ handleSubmit }>
		<legend><h1>{text}</h1></legend>
		<p>123QWEqwe@</p>
		<Input id="email" name={'email'} type={'email'} text="Email"/>
		<Input id="password" name={'password'} type={'password'} text="Password"/>

		<button type="submit" value="Go">Submit</button>
	</form>
);

export default Form