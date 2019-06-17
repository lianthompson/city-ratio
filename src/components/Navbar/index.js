import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Navbar.css';


export class Navbar extends Component {

    render() {

        return (
            <Router>
                <div className="navbar-container">
                    <a className="navbar-logo" href="/">
                        <img className="navbar-icon" src="https://res.cloudinary.com/dec0zvcps/image/upload/v1558297878/icon_stwdjw.png" alt="" />
                    </a>
                    <div className="navbar-link-container">
                        <ul className="navbar-item">
                            <a href="mailto:lian@colark.com" className="navbar-item">feedback</a>
                        </ul>
                    </div>
                </div>
            </Router>
        )
    }
}
