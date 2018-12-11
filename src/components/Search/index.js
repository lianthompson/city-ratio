import React, { Component } from 'react';
import { Map } from '../Map';

export class Search extends Component {
    state = {
            firstCity: '',
            secondCity: ''
    };

    onTextChange = (e) => {
        e.preventDefault();
            let firstCity = e.target.firstCity.value;
            let secondCity = e.target.secondCity.value;
            console.log(firstCity, secondCity)
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
                <Map/>
            </div>
        )
    }
}