const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    'firstName' : String,
    'lastName' : String,
    'email' : String,
    'birthday' : Date,
    'created_at' : Date,
    'updated_at' : Date,
});

module.exports = db.models('User', userSchema);