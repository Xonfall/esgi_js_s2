const express = require('express');
const router = express.Router();
const Event = require('../models/event');

router.get('/', (req, res) => {
    Event.find().then(data => {
        if(data != null) {
            res.send(data);
        } else {
            res.send({result: 'Vide'});
        }
    });
});

router.post('/create', (req, res) => {
    if (
        req.body.title !== null &&
        req.body.description !== null &&
        req.body.img !== null &&
        req.body.adresse !== null &&
        req.body.price !== null &&
        req.body.eventDate !== null
    ) {

        const {title, description, img, adresse, price, eventDate} = req.body;
        const event = new Event({title, description, img, adresse, price, eventDate, created_at: Date()});

        event.save( function (error, result){
            console.log(error);
            console.log(result);
            res.send({
                result: 'OK',
                title
            });
        })
    }
});

module.exports = router;