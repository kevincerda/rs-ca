import React from 'react';
import HoursTable from './HoursTable.jsx';

const DetailsCard = props => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return props.detailsActive ? (
    <div className="col-8" id="popup-wrapper">
      <div className="row">
        <div className="col-12">
          <button onClick={props.handleExitClick}>
            <i class="fas fa-times" />
          </button>
        </div>
        <div className="col-12" id="img-placeholder" />
        <div className="col-12">
          <span className="title">{props.activeItemData.name}</span>
        </div>
        <div className="col-12">
          <span className="title-secondary">
            {props.activeItemData.address} {props.activeItemData.city},
            {props.activeItemData.state} {props.activeItemData.postal_code}
          </span>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <img className="icon" src={props.PhoneIcon} />
              <span className="phone-number">123-456-7890</span>
            </div>
            <div className="col-6">
              <span className="phone-number">
                <img className="icon" src={props.DirectionsIcon} />
                <a
                  href="#"
                  onClick={() =>
                    window.open(
                      props.handleDirectionsClick(
                        props.activeItemData.latitude,
                        props.activeItemData.longitude
                      ),
                      '_blank'
                    )
                  }
                >
                  Directions
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12">
          <table className="table table-borderless">
            <thead>
              <tr>
                <th scope="col-2" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {days.map((day, index) => {
                return (
                  <HoursTable
                    index={index}
                    day={day}
                    key={index}
                    active={parseInt(props.weekday) === index ? true : null}
                    activeItemData={props.activeItemData}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : null;
};

export default DetailsCard;
