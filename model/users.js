'use strict';
//import dependency
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//create new instance of the mongoose.schema. the schema takes an
//object that shows the shape of your database entries.
let UsersSchema = mongoose.model('User', new Schema({
	Email: String,
	Password: String,
	CreatedDate: Date,
	Access: String
}));
//export our module to use in server.js
module.exports = UsersSchema;