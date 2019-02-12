const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    'title' : String,
    'description': String,
    'subIcon' : String,
    'price': Number,
    'created_at' : Date,
    'updated_at' : Date,
});

module.exports = db.model('Subscription', subscriptionSchema);