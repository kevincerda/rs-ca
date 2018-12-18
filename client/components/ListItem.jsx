import React from 'react';

const ListItem = props => {
  return (
    <div
      className={
        props.activeItem == props.id
          ? 'col-10 offset-1 result-item active-item'
          : 'col-10 offset-1 result-item'
      }
      key={props.id}
      data-id={props.id}
      data-latitude={props.latitude}
      data-longitude={props.longitude}
      onClick={props.handleItemClick}
    >
      <div className="row">
        <div className="col-md-10">
          <span className="title">{props.name}</span>
        </div>
        <div className="col-md-2 text-md-right">0.5 mi</div>
        <div className="col-12">
          <span className="title-secondary">
            {props.address} {props.city}, {props.state} {props.postal_code}
          </span>
        </div>
        <div className="col-12">Open until {props.closeHour}</div>
        <div className="col-12">
          <img className="icon" src={props.PhoneIcon} />
          <span className="highlight-text">123-456-7890</span>
        </div>
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-dark btn-block"
            onClick={() =>
              window.open(
                props.handleDirectionsClick(props.latitude, props.longitude),
                '_blank'
              )
            }
          >
            Directions
          </button>
        </div>
        <div className="col-md-6">
          <button
            type="button"
            className="btn btn-dark btn-block"
            data-truck={props.id}
            onClick={props.handleMoreInfoClick}
          >
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
