import React, { Component } from 'react';
import Banner from '../components/Banner';
import ToggleButton from "../components/ToggleButton";

export default class ToggleButtonContainer extends Component {
    state =  {
        theme: "black"
    };

    toggleTheme = () => {
        console.log(this);
        this.setState({theme: this.state.theme === "black" ? "light" : "black"});
        this.alertChange();
    };

    alertChange = () => alert(this.state.theme);
    render() {
        return (
            <React.Fragment>
                <ToggleButton toggleHandler={this.toggleTheme}/>
                <Banner content={this.state.theme}/>
            </React.Fragment>
        );
    }
}