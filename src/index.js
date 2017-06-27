import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Nav from './client/app/components/nav'
import LargeLogin from './client/app/components/largeLogin';
import Account from './client/app/routes/account';




render(
	<Router component={Nav}>
		<div>
			<Route path="/" component={LargeLogin}/>
			<Route path="/account" component={Account}/>
		</div>
	</Router>,
	document.getElementById('App')
);
