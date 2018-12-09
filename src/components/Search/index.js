import React, { Component } from 'react';

export class Search extends Component {
    constructor() {
        super();
        this.state = {
            firstCity: '',
            secondCity: ''
        }
    }

    updateFirstCity(event) {
        this.setState({firstCity: event.target.value});
    }

    updateSecondCity(event) {
        this.setState({secondCity: event.target.value});
    }

    render() {
        return (
            <div>
                {/* <h4>Enter the two cities you'd like to compare</h4> */}
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.firstCity} onChange={this.updateFirstCity.bind(this)} id="firstCity" name='firstCity' placeholder='Ex. San Francisco' 
                    />
                    <input type='text' value={this.state.secondCity}onChange={this.updateSecondCity.bind(this)}id="secondCity" name='secondCity' placeholder='Ex. Singapore' />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}