const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find().then(data => res.send(data));
});

router.get('/:title', (req, res) => {
    Movie.findOne({title: req.params.title}).then(data => res.send(data));
});

module.exports = router;