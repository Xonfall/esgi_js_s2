import React, { Component } from 'react';
import Banner from '../components/BannerComponent';
import { connect } from 'react-redux';

class ProfileBanner extends Component {
    render() {
        const {user, isLogged} = this.props;
        return <Banner content={isLogged ? user.name : 'Not connected'}></Banner>
    }
}

const ConnectedProfileBanner = connect()(ProfileBanner);

export default ConnectedProfileBanner;