import React, { Component } from 'react';

export default class SignUpForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        email: ''
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
                <label>Nom</label>
                <input type="text" onKeyUp={(event) => this.handleKeyUp(event, "lastName")}/>
                <label>Prénom</label>
                <input type="text" onKeyUp={(event) => this.handleKeyUp(event, "firstName")}/>
                <label>Email</label>
                <input type="text" onKeyUp={(event) => this.handleKeyUp(event, "email")}/>
                <label>Password</label>
                <input type="password" onKeyUp={(event) => this.handleKeyUp(event, 'password')}/>
                <button type="submit">S'inscrire</button>
            </form>
        )
    }
}