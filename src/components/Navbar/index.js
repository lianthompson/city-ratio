import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {

    render() {

        return (
            <Router>
                <div className="navbar-container">
                    <a className="navbar-logo" href="/">
                        <img className="navbar-icon" src="https://res.cloudinary.com/dec0zvcps/image/upload/v1557788514/globe_eezsle.jpg" alt=""/>
                    </a>
                    <Link to="savedmaps">
                        <div className="navbar-link-container">
                            <ul className="navbar-item"
                            >saved maps</ul>
                        </div>
                    </Link>
                </div>
            </Router>
        )
    }
}
