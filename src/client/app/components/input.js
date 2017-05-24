import React from 'react';

export const Input = ({name, text, type}) => (
		<label>{text}<input name={name} type={type}/></label>
);

export default Input
