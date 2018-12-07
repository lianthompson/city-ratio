import React, { Component } from 'react';

export class Search extends Component {
    // state = {
    //     firstCity: "",
    //     secondCity: "",
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();

    //     const cityOne = e.target.firstCity.value;
    //     const cityTwo = e.target.secondCity.value;
    // }
    render() {
        return (
            <div>
                {/* <h4>Enter the two cities you'd like to compare</h4> */}
                <form>
                    <input type='text' id="firstCity" name='firstCity' placeholder='Ex. San Francisco' />
                    <input type='text' id="firstCity" name='secondCity' placeholder='Ex. Singapore' />
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}