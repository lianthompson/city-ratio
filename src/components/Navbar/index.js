import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';


// const Child = ({match}) => console.log('match', match) || (
//     <div>
//         <h3>id: {match.params.id}</h3>
//     </div>

// )


export class Navbar extends Component {

    render() {

        return (
            <Router>
                <div className="navbar-container">
                    <a className="navbar-logo" href="/">
                        <img className="navbar-icon" src="https://res.cloudinary.com/dec0zvcps/image/upload/v1557788514/globe_eezsle.jpg" alt="" />
                    </a>
                    {/* <Link to="savedmaps"> */}
                        {/* <div className="navbar-link-container">
                            <ul className="navbar-item"
                            >login</ul>
                        </div> */}
                        <div className="navbar-link-container">
                        <ul className="navbar-item">
                            <a href="mailto:lian@colark.com" className="navbar-item">feedback</a>
                        </ul>
                        </div>
                    {/* </Link> */}

                    {/* <Route path='/:id' component={Child}/> */}
                </div>
            </Router>
        )
    }
}
