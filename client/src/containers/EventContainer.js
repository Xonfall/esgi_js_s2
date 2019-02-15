import React from 'react';
import {Route, Switch} from "react-router-dom";
import {connect} from 'react-redux';
import EventForm from "./EventForm";
import {addEvent} from '../redux/actions/eventsAction'

class EventContainer extends React.Component {

    handleSubmit = (data) => {
        this.props.addEvent(data.title);
    };

    render() {
        return (
            <Switch>
                <Route path="/events" render={() => <EventForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addEvent: (title) => dispatch(addEvent(title, dispatch)),
    }
}

export default connect(undefined, mapDispatchToProps)(EventContainer);
