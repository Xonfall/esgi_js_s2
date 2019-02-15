import React from 'react';
import '../App.css';
import Moment from 'moment';
import {Link} from "react-router-dom";


const EventComponent = ({event}) => <div className="row">
    <div className="col s12 m6">
        <div className="card">
            <span className="card-title">{event.title}</span>
            <div className="card-content">
                <p>Description :{event.description}</p>
                <p>Adresse :{event.adresse}</p>
                <p>Prix :{event.price}</p>
                <p>Créé le :{Moment(event.created_at).format('d MMM')}</p>
            </div>
            <div className="card-action">
                <Link to={'/events/'+ event.title}>Voir</Link>
            </div>
        </div>
    </div>
</div>

export default EventComponent;