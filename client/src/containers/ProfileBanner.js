import React, { Component } from 'react';
import Banner from '../components/BannerComponent';
import { connect } from 'react-redux';

class ProfileBanner extends Component {
    render() {
        const {user, isLogged} = this.props;
        return <Banner content={isLogged ? user.name : 'Not connected'}></Banner>
    }
}

const mapStateToProps = function(state, ownProps) {
    const {security: {user, isLogged}} = state;
    return {
        user,
        isLogged
    };
}

const mapDispatchToProps = function(dispatch) {
    return {
        //logUser: (username, password) => dispatch(logUser(username, password))
    }
}

const connectGenerator = connect(mapStateToProps, mapDispatchToProps)
const ConnectedProfileBanner = connect()(ProfileBanner);

export default ConnectedProfileBanner;