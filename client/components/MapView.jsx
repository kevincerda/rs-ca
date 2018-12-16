import React from 'react';
import Icon from '../../assets/map-pin.png';

const MapView = props => {
  const googleURL = 'https://maps.googleapis.com/maps/api/staticmap?';
  const mapSize = 'size=640x640';
  const mapScale = 'scale=2';
  const mapZoom = 'zoom=13';
  const mapFormat = 'format=png';
  const mapType = 'type=roadmap';
  const markerIcon = Icon;

  return (
    <div className="col-7" id="map">
      {props.markerLongitude && props.markerLatitude ? (
        <img
          src={`
        ${googleURL}&${mapSize}&${mapScale}&${mapZoom}&${mapFormat}&${mapType}&markers=${
            props.markerLatitude
          },${props.markerLongitude}&key=${props.API_KEY}
        `}
          id="map"
        />
      ) : (
        'Click a location to load a map'
      )}
    </div>
  );
};

export default MapView;
