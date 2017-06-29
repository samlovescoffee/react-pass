let User = require('../model/users');
let passwordHash = require('password-hash');
let Log = require('./logs');

const user = {
	create: function createNewUser(req) {
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
};
module.exports = user;