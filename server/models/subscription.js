const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
    'title' : String,
    'description': String,
    'type': String,
    'img' : {url: String, alt: String},
    'price': Number,
    'user': {
        _id: Object
    },
    'created_at' : Date,
    'updated_at' : Date
});

module.exports = db.model('Subscription', subscriptionSchema);