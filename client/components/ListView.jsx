import React from 'react';
import ListItem from './ListItem.jsx';

const ListView = props => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const day = days[props.weekday];
  const dayClose = `${day.toLowerCase()}_close`;

  return (
    <div className="col-lg-5" id="list">
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote text-center">
            <h5>Displaying {props.data.length} Results</h5>
          </blockquote>
        </div>
      </div>
      <div className="row">
        {props.data.map((truck, index) => {
          return (
            <ListItem
              key={truck.id}
              id={truck.id}
              latitude={truck.latitude}
              longitude={truck.longitude}
              name={truck.name}
              address={truck.address}
              city={truck.city}
              postal={truck.postal_code}
              state={truck.state}
              PhoneIcon={props.PhoneIcon}
              handleMoreInfoClick={props.handleMoreInfoClick}
              activeItem={props.activeItem}
              handleDirectionsClick={props.handleDirectionsClick}
              PhoneIcon={props.PhoneIcon}
              weekday={props.weekday}
              closeHour={truck[dayClose]}
              handleItemClick={props.handleItemClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
