const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    'title' : String,
    'description' : String,
    'img' : {url: String, alt: String},
    //'position' : {lat: Number, lng: Number},
    'adresse': String,
    'price' : Number,
    'eventDate' : Date,
    'created_at' : Date,
    'updated_at' : Date,
});

module.exports = db.model('Event', eventSchema);