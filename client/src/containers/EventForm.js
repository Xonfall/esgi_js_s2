import React, { Component } from 'react';

export default class EventForm extends Component {
    state = {
        title: '',
    };

    handleKeyUp = (event, field) => {
        const input = event.currentTarget;

        this.setState({
            [field]: input.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Title</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, "email")}/>
                <button type="submit">Créer un evenement</button>
            </form>
        )
    }
}