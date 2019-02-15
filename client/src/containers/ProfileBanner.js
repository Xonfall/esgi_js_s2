import React, { Component } from 'react';
import Banner from '../components/BannerComponent';
import { connect } from 'react-redux';
import jwt_decode from 'jwt-decode';

class ProfileBanner extends Component {
    render() {
        const {user, isLogged} = this.props;
        let decodedToken = '{"Message":"Not Decoded"}';
        if(isLogged && user.token !== undefined) {
            decodedToken = JSON.stringify(jwt_decode(user.token));
        }
        return <Banner content={isLogged ? decodedToken : 'Not connected'}></Banner>
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
const ConnectedProfileBanner = connectGenerator(ProfileBanner);

export default ConnectedProfileBanner;