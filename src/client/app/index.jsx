import React from 'react';
import {render} from 'react-dom';
import title from './components/title';

function newTitle(text) {
	return title(text);
}

function App() {
	return newTitle('This works without classes');
}

render(<App/>, document.getElementById('app'));