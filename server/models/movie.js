const db = require('../libs/db');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: {type: Number, min: 1850},
    released: Date
});

module.exports = db.model('Movie', movieSchema);