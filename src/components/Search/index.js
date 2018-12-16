import React, { Component } from 'react';
import { ActiveMap } from '../ActiveMap';

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
            <div>
                {/* <h4>Enter the two cities you'd like to compare</h4> */}
                <form onSubmit={this.onTextChange}>
                    <input type='text' id="firstCity" name='firstCity' placeholder='Ex. San Francisco' 
                    />
                    <input type='text' id="secondCity" name='secondCity' placeholder='Ex. Singapore' />
                    <button type='submit'>Search</button>
                </form>
                <ActiveMap firstCity={this.state.firstCity} secondCity={this.state.secondCity}/>
            </div>
        )
    }
}