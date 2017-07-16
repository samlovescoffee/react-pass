'use strict';
let logs = require('../model/logs');

const log = {
	audit: function dbLog(email, message) {
		let log = new logs.audit;
		log.Email = email;
		log.Message = message;
		log.Date = new Date();

		log.save(function(err) {
			if (err) {
				res.send(err);
			}
		});
	},

	error: function dbError(err) {
		let log = new logs.error;
		log.Error = err;
		log.Date = new Date();

		log.save(function(err) {
			if (err) {
				res.send(err);
			}
		});
	}
};

module.exports = log;
