import React from 'react';
import {Switch, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import SignUpForm from './SignUpForm';

export default class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        fetch('http://localhost:3000/login_check', {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data),
            mode: 'cors'
        }).then(response => response.json())
            .then(data => localStorage.setItem('token', data.token))
            .catch(error => console.log("Error", error));
    };

    handleSubmit2 = (data) => {
        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify(data),
            mode: 'cors'
        }).then(response => response.json())
            .then(data => localStorage.setItem('token', data.token))
            .catch(error => console.log("Error", error));
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/> } />
                <Route path="/security/signup" render={() => <SignUpForm onSubmit={this.handleSubmit2}/> } />
            </Switch>
        );
    }
}