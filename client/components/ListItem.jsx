import React from 'react';

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
          <div className="col-6">{truck.name}</div>
          <div className="col-6">0.5 mi</div>
          <div className="col-12">{truck.address}</div>
          <div className="col-12">
            {truck.city}, {truck.state} {truck.postal_code}
          </div>
          <div className="col-12">Open until {}</div>
          <div className="col-12">123-456-7890</div>
          <div className="col-6">
            <button type="button" className="btn btn-dark btn-block">
              Directions
            </button>
          </div>
          <div className="col-6">
            <button type="button" className="btn btn-dark btn-block">
              More Info
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="col-5" id="list">
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote text-center">
            <h5>Found {props.data.length} Taco Trucks Near You</h5>
          </blockquote>
        </div>
      </div>
      <div className="row">{transformedData}</div>
    </div>
  );
};

export default ListItem;
