import React from 'react';
import PhoneIcon from '../../assets/phone-icon.png';

const ListItem = props => {
  const transformedData = props.data.map((truck, index) => {
    return (
      <div
        className={
          props.activeItem === truck.id
            ? 'col-10 offset-1 result-item active-item'
            : 'col-10 offset-1 result-item'
        }
        key={truck.id}
        data-id={truck.id}
        data-latitude={truck.latitude}
        data-longitude={truck.longitude}
        onClick={props.handleItemClick}
      >
        <div className="row">
          <div className="col-10">
            <span className="title">{truck.name}</span>
          </div>
          <div className="col-2 text-right">0.5 mi</div>
          <div className="col-12">
            <span className="title-secondary">
              {truck.address} {truck.city}, {truck.state} {truck.postal_code}
            </span>
          </div>
          <div className="col-12">Open until {}</div>
          <div className="col-12">
            <img className="icon" src={PhoneIcon} />
            <span className="phone-number">123-456-7890</span>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-dark btn-block"
              onClick={() =>
                window.open(
                  props.handleDirectionsClick(truck.latitude, truck.longitude),
                  '_blank'
                )
              }
            >
              Directions
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-dark btn-block"
              data-truck={truck.id}
              onClick={props.handleMoreInfoClick}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="col-lg-5" id="list">
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote text-center">
            <h5>Displaying {props.data.length} Results</h5>
          </blockquote>
        </div>
      </div>
      <div className="row">{transformedData}</div>
    </div>
  );
};

export default ListItem;
