import React from 'react';
import {Switch, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { login } from '../redux/actions/security';

class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        // Utilisé dans le const mapDispatchToProps
        //this.props.dispatch(login(data.username, data.password, this.props.dispatch));
        //this.props.dispatch(data.username, data.password);
        this.props.login(data.username, data.password);
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
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmit2}/> } />
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(login(username, password, dispatch))
    }
}

export default connect(undefined, mapDispatchToProps)(SecurityContainer);