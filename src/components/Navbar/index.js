import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { Search } from '../Search'
import './Navbar.css';

export class Navbar extends Component {

    render() {
        return (
            <Router>
                <div className="navbar-container">
                    <Link to="/">
                        <div className="navbar-logo">city-ratio</div>
                    </Link>
                    <Link to="savedmaps">
                        <div className="navbar-link-container">
                            <ul className="navbar-item">saved maps</ul>
                        </div>
                    </Link>
                    {/* <Route path="/" exact component={Search} /> */}
                </div>
            </Router>
        )
    }
}
