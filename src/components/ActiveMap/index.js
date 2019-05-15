import React, { Component, PropTypes } from 'react';
import mapboxgl from 'mapbox-gl';
import './ActiveMap.css';

mapboxgl.accessToken = "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg";

 var firstCityCoordinates = [-122.4194, 37.7749];
 var secondCityCoordinates = [-74.006, 40.7128];
 var ZOOM_LEVEL = 12;


// var firstMap = new mapboxgl.Map({
//     container: this.firstCity, // container id
//     style: "mapbox://styles/mapbox/basic-v9", //stylesheet location
//     center: firstCityCoordinates, // starting position [lng, lat]
//     zoom: ZOOM_LEVEL, // starting zoom
//     interactive: true,
//     scrollZoom: false,
// });

// var secondMap = new mapboxgl.Map({
//     container: this.secondCity, // container id
//     style: "mapbox://styles/mapbox/streets-v11", //stylesheet location
//     center: secondCityCoordinates, // starting position [lng, lat]
//     zoom: ZOOM_LEVEL, // starting zoom
//     interactive: true,
//     scrollZoom: false
// });

// secondMap.on('load', function() {
//     this.mapTwo.addSource('geojson', {
//         "type": "geojson",
//         "data": geojson
//     });

// secondMap.addLayer({
//     id: 'measure-points',
//     type: 'circle',
//     source: 'geojson',
//     paint: {
//     'circle-radius': 5,
//     'circle-color': '#000'
//     },
//     filter: ['in', '$type', 'Point']
//     });
//     this.mapTwo.addLayer({
//     id: 'measure-lines',
//     type: 'line',
//     source: 'geojson',
//     layout: {
//     'line-cap': 'round',
//     'line-join': 'round'
//     },
//     paint: {
//     'line-color': '#000',
//     'line-width': 2.5
//     },
//     filter: ['in', '$type', 'LineString']
//     });

    // this.secondMap.on('click', function(e) {
        // var features = this.secondMap.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
         
        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        // if (geojson.features.length > 1) geojson.features.pop();
         
        // Clear the Distance container to populate it with a new value
        // distanceContainer.innerHTML = '';
         
        // If a feature was clicked, remove it from the map
        // if (features.length) {
        // var id = features[0].properties.id;
        // geojson.features = geojson.features.filter(function(point) {
        // return point.properties.id !== id;
        // });
        // } else {
        // var point = {
        // "type": "Feature",
        // "geometry": {
        // "type": "Point",
        // "coordinates": [
        // e.lngLat.lng,
        // e.lngLat.lat
        // ]
        // },
        // "properties": {
        // "id": String(new Date().getTime())
        // }
        // };
         
        // geojson.features.push(point);
        // }
         
        // if (geojson.features.length > 1) {
        // linestring.geometry.coordinates = geojson.features.map(function(point) {
        // return point.geometry.coordinates;
        // });
         
        // geojson.features.push(linestring);
         
        // Populate the distanceContainer with total distance
        // var value = document.createElement('pre');
        // value.textContent = 'Total distance: ' + turf.lineDistance(linestring).toLocaleString() + 'km';
        // distanceContainer.appendChild(value);
        // }
         
        // this.secondMap.getSource('geojson').setData(geojson);
        // });
        // });
         
        // this.secondMap.on('mousemove', function (e) {
        // var features = this.secondMap.queryRenderedFeatures(e.point, { layers: ['measure-points'] });
        // UI indicator for clicking/hovering a point on the map
        // this.secondMap.getCanvas().style.cursor = (features.length) ? 'pointer' : 'crosshair';
        // });
var geocoder = window.L.mapbox.geocoder("mapbox.places", { accessToken: "pk.eyJ1IjoibGlhbnRob21wc29uIiwiYSI6ImNqcGJqMmx3aTA0Z2MzamxrZjhzcmY5c2wifQ.TVNesv3GrmPx2Y87mRiXcg" })

// var geojson = {
//     "type": "FeatureCollection",
//     "features": []
// };

// var linestring = {
//     "type": "Feature",
//     "geometry": {
//         "type": "LineString",
//         "coordinates": []
//     }
// };
// look up setZoom button in mapboxgl api

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
            opacity: '0.6',
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
            <div style= {firstCityStyle} ref= {el => this.firstCity = el}/>
            <div style= {secondCityStyle} ref= {el => this.secondCity = el}/>
            </div>
            
        )
    }
}