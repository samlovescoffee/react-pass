import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Nav from './components/nav'
import LargeLogin from './components/largeLogin';
import Account from './routes/account';




render(
	<Router component={Nav}>
		<div>
			<Route path="/" component={LargeLogin}/>
			<Route path="/account" component={Account}/>
		</div>
	</Router>,
	document.getElementById('App')
);