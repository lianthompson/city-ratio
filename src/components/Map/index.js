import React, { Component, PropTypes } from 'react';
//import { Search } from './components/Search';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg";



var firstCityCoordinates = [103.8198, 1.3521];
var secondCityCoordinates = [-74.006, 40.7128];
var ZOOM_LEVEL = 11;


export class Map extends Component {

    componentDidMount() {


        this.map = new mapboxgl.Map({
            container: this.firstCity, // container id
            style: "mapbox://styles/mapbox/basic-v9", //stylesheet location
            center: firstCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            scrollZoom: true
        });

        this.mapTwo = new mapboxgl.Map({
            container: this.secondCity, // container id
            style: "mapbox://styles/mapbox/dark-v9", //stylesheet location
            center: secondCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            scrollZoom: true
        });
    }

    render() {
        const firstCity = {
            position: 'absolute',
            top: '100px',
            bottom: '0',
            width: '100%',
            opacity: '0.6',

          };

        const secondCity = {
            opacity: '0.3',
            position: 'absolute',
            top: '100px',
            bottom: '0',
            width: '100%',
        }
      
        
        return (
            <div>
            <div style= {firstCity} ref= {el => this.firstCity = el}/>
            <div style= {secondCity} ref= {el => this.secondCity = el}/>
            </div>
        )
    }
}