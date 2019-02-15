import React from 'react';
import {Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm';
import {connect} from 'react-redux';
import {login, register} from '../redux/actions/security';

class SecurityContainer extends React.Component {

    handleSubmitLogin = (data) => {
        this.props.login(data.email, data.password);
    };

    handleSubmitRegister = (data) => {
        this.props.register(data.firstName, data.lastName, data.email, data.password);
    };

    render() {
        return (
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmitLogin}/>}/>
                <Route path="/security/register" render={() => <RegisterForm onSubmit={this.handleSubmitRegister}/>}/>
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