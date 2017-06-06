import React from 'react';
import Form from './form';

let newUser = true;
let formTitle;

if(newUser){
	formTitle = "Sign Up"
} else {
	formTitle = "Sign In"
}

function LargeLogin() {
	return Form(formTitle);
}

export default LargeLogin
