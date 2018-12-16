import React, { Component, PropTypes } from 'react';
// import { Search } from './components/Search';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

mapboxgl.accessToken = "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg";

 var firstCityCoordinates = [103.8198, 1.3521];
 var secondCityCoordinates = [-74.006, 40.7128];
 var ZOOM_LEVEL = 11;


var geocoder = window.L.mapbox.geocoder("mapbox.places",{accessToken:"pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg"})


// make one "active" map
// look up setZoom button in mapboxgl api

export class ActiveMap extends Component {

    componentDidMount() {

        this.map = new mapboxgl.Map({
            container: this.firstCity, // container id
            style: "mapbox://styles/mapbox/basic-v9", //stylesheet location
            center: firstCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            // scrollZoom: true,
        });

        this.map.on('load', () => {
            this.mapTwo = new mapboxgl.Map({
                container: this.secondCity, // container id
                style: "mapbox://styles/mapbox/dark-v9", //stylesheet location
                center: secondCityCoordinates, // starting position [lng, lat]
                zoom: ZOOM_LEVEL, // starting zoom
                interactive: true,
                // scrollZoom: true
            });
        })
        console.log(firstCityCoordinates)
        console.log(secondCityCoordinates)
        console.log(window.L.mapbox.geocoder);
    }

    componentDidUpdate() {
        geocoder.query(this.props.firstCity,(error, result)=>{this.map.setCenter(result.latlng.reverse())})
        geocoder.query(this.props.secondCity,(error, result)=>{this.mapTwo.setCenter(result.latlng.reverse())})
    }

    render() {
        const firstCityStyle = {
            position: 'absolute',
            top: '100px',
            bottom: '0',
            width: '100%',
            opacity: '0.6',
          };

        const secondCityStyle = {
            opacity: '0.3',
            position: 'absolute',
            top: '100px',
            bottom: '0',
            width: '100%',
            //height: '200px',
        }
      
        console.log(this.props.firstCity);
        console.log(this.props.secondCity);
        
        return (
            <div>
            <div style= {firstCityStyle} ref= {el => this.firstCity = el}/>
            <div style= {secondCityStyle} ref= {el => this.secondCity = el}/>
            </div>
        )
    }
}