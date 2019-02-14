import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {login} from '../redux/actions/security';

class SecurityContainer extends React.Component {

    handleSubmit = (data) => {
        // Utilisé dans le const mapDispatchToProps
        this.props.login(data.email, data.password);
    };

    handleSubmitRegister = (data) => {
        this.props.register(data.firstName, data.lastName, data.email, data.password);
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmit2}/>}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password, dispatch))
    }
}

export default connect(undefined, mapDispatchToProps)(SecurityContainer);
