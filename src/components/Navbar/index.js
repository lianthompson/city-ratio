import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';

export class Navbar extends Component {

    render() {
        function Refresh(e) {
            e.preventDefault();
            window.location.reload()
        }

        return (
            <Router>
                <div className="navbar-container">
                    <Link to="/">
                        <div className="navbar-logo" onClick={Refresh}>city-ratio</div>
                    </Link>
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
