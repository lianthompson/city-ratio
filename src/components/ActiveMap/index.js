import React, { Component, PropTypes } from 'react';
import mapboxgl from 'mapbox-gl';
import turf from 'turf';
import turf2 from '@turf/point-to-line-distance';
import './ActiveMap.css';

console.log(turf);

mapboxgl.accessToken = "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg";

 var firstCityCoordinates = [-122.4194, 37.7749];
 var secondCityCoordinates = [-74.006, 40.7128];
 var ZOOM_LEVEL = 12;

 var linestring = {
    "type": "Feature",
    "geometry": {
    "type": "LineString",
    "coordinates": []
    }
    };

var geojson = {
    "type": "FeatureCollection",
    "features": []
};

var from = turf.point([-75.343, 39.984]);
var to = turf.point([-75.534, 39.123]);
var options = {units: 'miles'};

// console.log(from)
 
// var distance = turf.distance(from, to, options);

// console.log(distance);

var geocoder = window.L.mapbox.geocoder("mapbox.places", { accessToken: "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg" })

// look up setZoom button in mapboxgl api

function addPoint (e) {
    e.preventDefault();

}

export class ActiveMap extends Component {

    componentDidMount() {

        this.map = new mapboxgl.Map({
            container: this.firstCity, // container id
            style: "mapbox://styles/mapbox/dark-v9", //stylesheet location
            center: firstCityCoordinates, // starting position [lng, lat]
            zoom: ZOOM_LEVEL, // starting zoom
            interactive: true,
            scrollZoom: false,
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
        geocoder.query(this.props.firstCity,(error, result)=>{this.map.setCenter(result.latlng.reverse())})
        geocoder.query(this.props.secondCity,(error, result)=>{this.mapTwo.setCenter(result.latlng.reverse())})
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
            <div className="map-container" onClick={addPoint}>
            <div id='distance' className='distance-container'></div>
            <div style= {firstCityStyle} ref= {el => this.firstCity = el}/>
            <div style= {secondCityStyle} ref= {el => this.secondCity = el}/>
            </div>
            
        )
    }
}