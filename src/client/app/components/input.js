import React from 'react';

let spanStyle = {
	display: 'block',
	marginBottom: '5px',
	fontSize: '15px'
};

let inputStyle = {
	width: '100%',
	marginBottom: '10px',
	fontSize: 20,
	padding: 5
};

export const Input = ({name, text, type}) => (
	<label><span style={spanStyle}>{text}</span><input name={name} type={type} style={inputStyle}/></label>
);

export default Input
