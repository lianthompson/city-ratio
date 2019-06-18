import React, { Component } from 'react';
import { ActiveMap } from '../ActiveMap';
import './Search.css';
import { connect } from 'react-redux';
import changeFirstCity from '../../actionCreators/changeFirstCity';
import changeSecondCity from '../../actionCreators/changeSecondCity';

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
                        <img src="https://res.cloudinary.com/dec0zvcps/image/upload/v1557788848/refershArrow_ylxhaq.png" className="reverse-button" onClick={this.reverse} alt="" />
                        <input type='text' id="secondCity" name='secondCity' placeholder='Ex. New York' required />
                        <button type='submit' className="search-button">compare</button>
                    </form>
                </div>
                <ActiveMap firstCity={this.state.firstCity} secondCity={this.state.secondCity} />
            </div>
        )
    }
}

const mapStateToProps = ({ state, firstCity, secondCity }) => {
    return {
        firstCity,
        secondCity
    }
}

const mapDispatchToProps = dispatch => ({
    onTextChange(e) {
        dispatch(changeFirstCity(e.target.value));
        dispatch(changeSecondCity(e.target.value));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);