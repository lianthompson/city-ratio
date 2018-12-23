import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {

    render() {
        return (
            <div className="navbar-container">
                <div className="navbar-logo">city-ratio</div>
                <div className="navbar-link-container">
                    {/* <ul className="navbar-item">saved maps</ul> */}
                </div>
            </div>
        )
    }
}
