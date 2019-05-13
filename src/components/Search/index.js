import React, { Component } from 'react';
import { ActiveMap } from '../ActiveMap';
import './Search.css';

export class Search extends Component {

    // default state
    state = {
        firstCity: 'San Francisco',
        secondCity: 'New York'
    };

    onTextChange = (e) => {
        e.preventDefault();

        this.setState({
            firstCity: e.target.firstCity.value,
            secondCity: e.target.secondCity.value
        })

        console.log("state is ....")
        // setting the state
    }
    reverse = (e) => {
        e.preventDefault();

        this.setState({
            firstCity: this.state.secondCity,
            secondCity: this.state.firstCity
        });
    }

    render() {


        return (
            <div className="search-container">
                <div className="search-container--inner">
                <h4 className="search-prompt">enter two cities you'd like to compare</h4>
                <form onSubmit={this.onTextChange} className="search-form-container">
                    <input type='text' id="firstCity" name='firstCity' placeholder='Ex. San Francisco' required 
                    />
                    <button type="reverse" className="reverse-button" onClick={this.reverse}>reverse</button>
                    <input type='text' id="secondCity" name='secondCity' placeholder='Ex. New York' required/>
                    <button type='submit' className="search-button">search</button>
                </form>
                </div>
                <ActiveMap firstCity={this.state.firstCity} secondCity={this.state.secondCity}/>
            </div>
        )
    }
}