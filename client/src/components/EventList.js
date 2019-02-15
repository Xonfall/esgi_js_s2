import React from 'react';
import EventListItem from './EventListItem'

const EventList = ({events}) => <div>{events.map((myEvent) =>
    <EventListItem event={myEvent} key={myEvent._id}/>
)}</div>;

export default EventList;