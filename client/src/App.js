import React, { Component } from 'react';
import './App.css';
import ToggleButtonContainer from "./containers/ToggleButtonContainer";
import { BrowserRouter, Link, Route } from 'react-router-dom'
import MovieContainer from "./containers/MovieContainer"
import SecurityContainer from "./containers/SecurityContainer"

class App extends Component {
  render() {
    return (
        <div className="App">
          
          <ToggleButtonContainer />
          <BrowserRouter>
            <React.Fragment>
              <Link to='/security/login'>Connexion</Link>
              <Link to='/security/signup'>S'inscrire</Link>
              <Link to='/movies'>List de film</Link>
              <Route path="/security" component={SecurityContainer}/>
              <Route path="/movies" component={MovieContainer}/>
            </React.Fragment>
          </BrowserRouter>
        </div>
    );
  }
}

export default App;