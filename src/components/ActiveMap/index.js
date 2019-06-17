import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './ActiveMap.css';
require('dotenv').load();


mapboxgl.accessToken = process.env.REACT_APP_API_KEY

mapboxgl.mb = mapboxgl.accessToken;

var firstCityCoordinates = [-122.4194, 37.7749];
var secondCityCoordinates = [-74.006, 40.7128];
var ZOOM_LEVEL = 12;


var geocoder = window.L.mapbox.geocoder("mapbox.places", { accessToken: mapboxgl.mb })

// look up setZoom button in mapboxgl api


export class ActiveMap extends Component {

    componentDidMount() {

        this.map = new mapboxgl.Map({
            container: this.firstCity, // container id
            style: "mapbox://styles/mapbox/dark-v9", //stylesheet location
            center: firstCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            scrollZoom: true,
        });

        this.mapTwo = new mapboxgl.Map({
            container: this.secondCity, // container id
            style: "mapbox://styles/mapbox/basic-v9", //stylesheet location
            center: secondCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            scrollZoom: false
        });
        console.log(firstCityCoordinates)
        console.log(secondCityCoordinates)
        console.log(window.L.mapbox.geocoder);
    }



    componentDidUpdate() {
        geocoder.query(this.props.firstCity, (error, result) => { this.map.setCenter(result.latlng.reverse()) })
        geocoder.query(this.props.secondCity, (error, result) => { this.mapTwo.setCenter(result.latlng.reverse()) })
        // only update if map doesn't already exist
    }

    render() {

        const firstCityStyle = {
            position: 'absolute',
            top: 210,
            bottom: 50,
            width: '80%',
            opacity: '.8',
        };

        const secondCityStyle = {
            opacity: '0.3',
            position: 'absolute',
            top: 210,
            bottom: 50,
            width: '80%',
        }

        console.log(this.props.firstCity);
        console.log(this.props.secondCity);

        return (
            <div className="map-container">
                <div id='distance' className='distance-container'></div>
                <div style={firstCityStyle} ref={el => this.firstCity = el} />
                <div style={secondCityStyle} ref={el => this.secondCity = el} />
            </div>
        )
    }
}