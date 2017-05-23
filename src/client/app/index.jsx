import React from 'react';
import {render} from 'react-dom';
import title from './components/title';

function newTitle(text, sub) {
	return title(text, sub);
}

function App() {
	return newTitle('This works without classes', 'More Elements');
}

render(<App/>, document.getElementById('app'));