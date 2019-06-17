import React, { Component } from 'react';
import Auth from '../../Auth/Auth';
import Navbar from '../Navbar';

const auth = new Auth();

class SavedMaps extends Component {
    

    // displays mysql data 
    componentDidMount() {
        const { isAuthenticated, userProfile, getProfile } = auth;
        if (!isAuthenticated()) {
            alert("Oops! You'll need to log in to see your products!")
        }

        if (isAuthenticated()) {
            if (!userProfile) {
                getProfile((err, profile) => {
                    this.getProducts(profile.email)
                });
            } else {
                this.getProducts(userProfile.email);

            }
        } 
    }


    render() {
        // const { products } = this.state;
        // const renderProduct = (title) =>
        // <li
        //     key={title}>
        //     {title}
        // </li>
        return (
            <div className="page">
                <Navbar auth={this.props.auth} history={this.props.history} />
                    <div className="Maps">
                    <h1>Your saved maps:</h1>
                    {/* <ul>
                        {products.map(product =>renderProduct(product.TITLE))}
                    </ul> */}
                    </div>
            </div>
        );
    }
}


export default SavedMaps;