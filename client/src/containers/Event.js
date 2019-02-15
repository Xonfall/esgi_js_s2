import React, { Component } from 'react';
import {connect} from 'react-redux';
import EventList from '../components/EventList'
import Banner from "./ProfileBanner";


class Event extends Component {
    render() {
        const {user, isLogged} = this.props;
        return <EventList events={isLogged ? user.token : 'Not connected'}></EventList>
    }
}

const mapStateToProps = function(state, ownProps) {
    const {event: {events}} = state;
    return {
        events,
    };
};

export default connect(mapStateToProps)(Event);