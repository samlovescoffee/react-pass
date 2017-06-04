'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let User = require('./model/users');

const app = express();
const router = express.Router();
const port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set 
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove caching so we get the most recent users
	res.setHeader('Cache-Control', 'no-cache');
	next();
});

mongoose.connect('mongodb://localhost/react-pass');

router.get('/', function(req, res) {
	res.json({ message: 'API Initialized!'});
});

app.use('/api', router);

app.listen(port, function() {
	console.log('api running on port ', port);
});

router.route('/users')
//retrieve all users from the database
.get(function(req, res) {
	//looks at our User Schema
	User.find(function(err, users) {
		if (err)
			res.send(err);
		//responds with a json object of our database users.
		res.json(users)
	});
})
//post user
.post(function(req, res) {
	let user = new User();
	//body parser lets us use the req.body
	user.Email = req.body.email;
	user.Password = req.body.password;

	user.save(function(err) {
		if (err) {
			res.send(err);
		}
		res.send('Data Submitted');
	});
});