import React from 'react';
import Input from './input';
import axios from 'axios';

let formStyle = {
	padding: 50,
	width: 250,
	minWidth: '25%',
	margin: 'auto',
	marginTop: 200,
	boxShadow: '0px 0px 10px -2px',
	background: 'white'
};

function handleSubmit() {
	axios.post(this.props.url, 'test');
}


export const form = (text) => (
	<form id="form" style={formStyle}>
		<legend><h1>{text}</h1></legend>

		<Input name={'email'} type={'email'} text={'Email'}/>
		<Input name={'password'} type={'password'} text={'Password'}/>
	</form>
);

export default form