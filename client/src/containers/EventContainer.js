import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import EventForm from "./EventForm";
import {addEvent, callEvent} from '../redux/actions/eventsAction'
import EventList from "../components/EventList";

class EventContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.addEvent(data);
    };

    render() {
        return (
            <Switch>
                <Route path="/events/create" render={() => <EventForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEvent: (data) => dispatch(addEvent(data, dispatch)),
        callEvent: (title) => dispatch(callEvent(dispatch)),
    }
};

export default connect(undefined, mapDispatchToProps)(EventContainer);
