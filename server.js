'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let passwordHash = require('password-hash');
let User = require('./model/users');
let Log = require('./controllers/logs');
let users = mongoose.model('User','users');

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

function createNewUser(req) {
	let user = new User();
	user.Email = req.body.email;
	user.Password = passwordHash.generate(req.body.password);
	user.CreatedDate = new Date();

	user.save(function(err) {
		if (err) {
			Log.error(err);
		} else {
			Log.audit(user.Email, 'New user created');
		}
	});
}

router.route('/users')
//post user
.post(function(req, res) {

	users.find({'Email': req.body.email}, function(err, data) {
		if (err) {
			Log.error(err);

		} else if (data.length === 0) {
			createNewUser(req);

		} else if (passwordHash.verify(req.body.password, data[0].Password)) {
			Log.audit(req.body.email, 'Successful log in request');

		} else {
			Log.audit(req.body.email, 'Unsuccessful log in');
		}
	});
});