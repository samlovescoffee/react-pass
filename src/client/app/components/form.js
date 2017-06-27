import React from 'react';
import Input from './input';
import axios from 'axios';

let querystring = require('querystring');

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

	for(let i = 0; i < inputs.length; i++){
		data[inputs[i].getAttribute('name')] = inputs[i].value;
	}

	axios.post('http://localhost:3001/api/users', querystring.stringify(data),
	{headers: {"Content-Type": "application/x-www-form-urlencoded"}},)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log('whopper ', error);
		});
}


export const Form = (text) => (
	<form id="access" style={formStyle} onSubmit={ handleSubmit }>
		<legend><h1>{text}</h1></legend>

		<Input id="email" name={'email'} type={'email'}/>
		<Input id="password" name={'password'} type={'password'}/>

		<button type="submit" value="Go">Go</button>
	</form>
);

export default Form