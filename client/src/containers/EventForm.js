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
                <input onKeyUp={(event) => this.handleKeyUp(event, "title")}/>
                <label>Description</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, "description")}/>
                <label>Img</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, "img")}/>
                <label>Adresse</label>
                <input onKeyUp={(event) => this.handleKeyUp(event, "adresse")}/>
                <label>Price</label>
                <input type="number" onKeyUp={(event) => this.handleKeyUp(event, "price")}/>
                <label>Event date</label>
                <input type="date" onKeyUp={(event) => this.handleKeyUp(event, "eventDate")}/>
                <button type="submit">Créer un evenement</button>
            </form>
        )
    }
}