import React from 'react';

const MapView = props => (
  <div className="col-7" id="map">
    {props.markerLocation ? (
      <img
        src={`https://maps.googleapis.com/maps/api/staticmap?center=San+Diego&zoom=14&scale=2&size=640x640&maptype=roadmap&key=AIzaSyBFAvSGyst2wHNOdBC2TXagOQ6m3uCqc_0&format=png&visual_refresh=true`}
        id="map"
      />
    ) : (
      'Click a location to load a map'
    )}
  </div>
);

export default MapView;
