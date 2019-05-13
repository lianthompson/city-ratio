import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Footer.css';

export class Footer extends Component {

    render() {
        return (
            <Router>
            <div className="footer-container">
                <a href="mailto:lian@colark.com" className="footer-item-contact">feedback</a>
                <Link to='howitworks'>
                <ul className="footer-item">how it works</ul>
                </Link>
            </div>
            </Router>
        )
    }
}