import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

const MapView = withScriptjs(
  withGoogleMap(props => (
    <section className="" id="map">
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {props.isMarkerShown && (
          <Marker position={{ lat: -34.397, lng: 150.644 }} />
        )}
      </GoogleMap>
    </section>
  ))
);

export default MapView;
