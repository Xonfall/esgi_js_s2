import React from 'react';
import {Switch, Route} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';
import { login, register } from '../redux/actions/security';

class SecurityContainer extends React.Component {

    handleSubmitLogin = (data) => {
        // Utilisé dans le const mapDispatchToProps
        //this.props.dispatch(login(data.username, data.password, this.props.dispatch));
        //this.props.dispatch(data.username, data.password);
        this.props.login(data.username, data.password);
    };

    handleSubmitRegister = (data) => {
        this.props.register(data.firstName, data.lastName ,data.username, data.password);
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmitLogin}/> } />
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmitRegister}/> } />
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password, dispatch)),
        register: (firstName, lastName, email, password) => dispatch(register(firstName, lastName, email, password, dispatch))
    }
}

export default connect(undefined, mapDispatchToProps)(SecurityContainer);
