const express = require('express');
const Movie = require('../models/movie');
const router = express.Router();

router.get('/', (req, res) => {
    Movie.find().then(data => res.status(200).send(data));
});

router.get('/:title', (req, res) => {
    Movie.findOne({title: req.params.title})
        .then(data => res.send(data))
        .catch(error => res.sendStatus(404));
});

// Exemple pour get les reviewers
/*router.get('/:title/reviewers', (req, res) => {
    Movie.findOne({title: req.params.title})
        .then(data => res.send(data.reviewers))
        .catch(error => res.sendStatus(404));
});*/

module.exports = router;