import React from 'react';
import Input from './input';

let formStyle = {
	padding: 50,
	maxWidth: '50%',
	margin: 'auto',
	border: 'solid 1px grey',
	borderRadius: '10px'
};


export const form = (text) => (
	<form id="form" style={formStyle}>
		<legend>{text}</legend>

		<Input name={'email'} type={'email'} text={'Email'}/>
		<Input name={'password'} type={'password'} text={'Password'}/>
	</form>
);


export default form