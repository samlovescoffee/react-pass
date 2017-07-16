'use strict';
let User = require('../model/users');
let passwordHash = require('password-hash');
let Log = require('./logs');

const user = {
	create: function createNewUser(req) {
				let user = new User();
				user.Email = req.body.email;
				user.Password = passwordHash.generate(req.body.password);
				user.CreatedDate = new Date();

				if (user.Email === 'sam@intravenous.coffee' || user.Email === 'elise_t92@hotmail.com') {
					user.Access = 'Admin';
				} else {
					user.Access = 'User';
				}

				user.save(function(err) {
					if (err) {
						Log.error(err);
					} else {
						Log.audit(user.Email, 'New user created');
					}
				});
			}
};
module.exports = user;