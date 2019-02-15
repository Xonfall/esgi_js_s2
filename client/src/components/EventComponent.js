import React from 'react';
import '../App.css';
import Moment from 'moment';
import {Link} from "react-router-dom";

const EventComponent = ({event}) => (event == null) ? "error":<div className="row">
    <div className="col s12 m6">
        <h1>{event.title}</h1>
        <p>Description :{event.description}</p>
        <p>Adresse :{event.adresse}</p>
        <p>Prix :{event.price}</p>
        <p>Créé le :{Moment(event.created_at).format('d MMM')}</p>
    </div>
</div>

export default EventComponent;