import React, { Component } from 'react';
import './App.css';
import ToggleButtonContainer from "./containers/ToggleButtonContainer";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MovieContainer from "./containers/MovieContainer"
import SecurityContainer from "./containers/SecurityContainer"
import ProfileBanner from './containers/ProfileBanner'
import EventContainer from "./containers/EventContainer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <ProfileBanner/>
                <BrowserRouter>
                    <React.Fragment>
                        <Link to='/security/login'>Connexion</Link>
                        <Link to='/security/register'>S'inscrire</Link>
                        <Link to='/events'>Les évènements</Link>
                        <Link to='/movies'>List de film</Link>
                        <Route path="/security" component={SecurityContainer}/>
                        <Route path="/events" component={EventContainer}/>
                        <Route path="/movies" component={MovieContainer}/>
                    </React.Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;