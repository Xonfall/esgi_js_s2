import React, { Component } from 'react';
import BannerComponent from '../components/BannerComponent';
import ToggleButtonComponent from "../components/ToggleButtonComponent";

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
                <ToggleButtonComponent toggleHandler={this.toggleTheme}/>
                <BannerComponent content={this.state.theme}/>
            </React.Fragment>
        );
    }
}