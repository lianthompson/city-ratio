import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {

    render() {
        return (
            <div className="footer-container">
                <a href="mailto:lian@colark.com" className="footer-item-contact">contact</a>
                <ul className="footer-item">how it works</ul>
            </div>
        )
    }
}