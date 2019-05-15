import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {

    render() {
        return (
            <Router>
            <div className="footer-container">
                <a href="mailto:lian@colark.com" className="footer-item-contact">feedback</a>
            </div>
            </Router>
        )
    }
}