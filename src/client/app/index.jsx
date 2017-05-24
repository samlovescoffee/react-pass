import React from 'react';
import {render} from 'react-dom';
import form from './components/form';

let newUser = true;
let formTitle;

if(newUser){
	formTitle = "Sign Up"
} else {
	formTitle = "Sign In"
}

function App() {
	return form(formTitle);
}

render(<App/>, document.getElementById("app"));