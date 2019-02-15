import React from 'react';
import EventListItem from './EventListItem'

const EventList = ({events}) => <div>{events.map((myEvent) =>
    <EventListItem event={myEvent} key={myEvent._id}/>
)} <a href="/events/create">Créer un évènement</a>
</div>;

export default EventList;