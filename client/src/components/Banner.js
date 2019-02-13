import React, { Component } from 'react';

export default class Banner extends React.PureComponent {
    render() {
        return <h1>{this.props.content}</h1>
    }
}