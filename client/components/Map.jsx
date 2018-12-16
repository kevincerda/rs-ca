import React from 'react';

const Map = props => {
  return (
    <img
      src={`
        ${props.googleURL}&${props.mapSize}&${props.mapScale}&${
        props.mapZoom
      }&${props.mapFormat}&${props.mapType}&markers=${props.markerLatitude},${
        props.markerLongitude
      }&key=${props.API_KEY}`}
      id="map"
    />
  );
};

export default Map;
