import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import EventForm from "./EventForm";
import {addEvent, callEvent} from '../redux/actions/eventsAction'
import EventList from "../components/EventList";
import EventComponent from "../components/EventComponent";

class EventContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.addEvent(data);
    };

    render() {
        return (
            <Switch>
                <Route path="/events/create" render={() => <EventForm onSubmit={this.handleSubmit}/>}/>
                <Route exact path="/events/" render={() => <EventList events={this.props.events}/>}/>
                <Route path="/events/:title" render={({match:{params:{title}}}) => <EventComponent event={this.props.events.find(event => event.title === title)}/>}/>
            </Switch>
        );
    }
}

const mapStateToProps = function(state, ownProps) {
    const {events: {events}} = state;
    return {
        events,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addEvent: (data) => dispatch(addEvent(data, dispatch)),
        callEvent: (data) => dispatch(callEvent(dispatch)),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EventContainer);
