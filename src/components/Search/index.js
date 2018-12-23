import React, { Component } from 'react';
import { ActiveMap } from '../ActiveMap';
import './Search.css';

export class Search extends Component {

    // default state
    state = {
        firstCity: 'Jamaica',
        secondCity: 'San Francisco'
    };

    onTextChange = (e) => {
        e.preventDefault();

        this.setState({
            firstCity: e.target.firstCity.value,
            secondCity: e.target.secondCity.value
        })
        // setting the state
    }

    render() {
        return (
            <div className="search-container">
                <div className="search-container--inner">
                <h4 className="search-prompt">enter two cities you'd like to compare</h4>
                <form onSubmit={this.onTextChange} className="search-form-container">
                    <input type='text' id="firstCity" name='firstCity' placeholder='Ex. San Francisco' 
                    />
                    <input type='text' id="secondCity" name='secondCity' placeholder='Ex. Singapore' />
                    <button type='submit' className="search-button">search</button>
                </form>
                </div>
                <ActiveMap firstCity={this.state.firstCity} secondCity={this.state.secondCity}/>
            </div>
        )
    }
}