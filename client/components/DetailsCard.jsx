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
    <div className="col-8 offset-2" id="popup-wrapper">
      <div className="row">
        <div className="col-12">
          <button onClick={props.handleExitClick}>X</button>
        </div>
        <div className="col-12">{props.activeItemData.name}</div>
        <div className="col-12">
          {props.activeItemData.address} {props.activeItemData.city},
          {props.activeItemData.state} {props.activeItemData.postal_code}
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-6">Phone</div>
            <div className="col-6">Get Directions</div>
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
                    active={props.weekday === index ? true : null}
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
