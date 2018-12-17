import React from 'react';
import Map from './Map.jsx';
import Icon from '../../assets/map-pin.png';
import DetailsCard from './DetailsCard.jsx';

const MapView = props => {
  return (
    <div className="col-7 d-none d-md-block" id="map">
      <div className="row" id="pop-up">
        <DetailsCard
          detailsActive={props.detailsActive}
          activeItemData={props.activeItemData}
          weekday={props.weekday}
          handleExitClick={props.handleExitClick}
        />
        <div className="col-12">
          {props.markerLongitude && props.markerLatitude ? (
            <Map
              googleURL={'https://maps.googleapis.com/maps/api/staticmap?'}
              mapSize={'size=465x650'}
              mapScale={'scale=2'}
              mapZoom={'zoom=13'}
              mapFormat={'format=png'}
              mapType={'type=roadmap'}
              markerIcon={Icon}
              markerLatitude={props.markerLatitude}
              markerLongitude={props.markerLongitude}
              API_KEY={props.API_KEY}
            />
          ) : (
            'Click a location to load a map'
          )}
        </div>
      </div>
    </div>
  );
};

export default MapView;
