import React from 'react';

const ListItem = props => {
  const transformedData = props.data.map((truck, index) => {
    return (
      <div className="col-3 card result-item" key={truck.id}>
        <div className="row">
          <div className="col-6">{truck.name}</div>
          <div className="col-6">0.5 mi</div>
          <div className="col-12">{truck.address}</div>
          <div className="col-12">Open until 9pm</div>
          <div className="col-12">123-456-7890</div>
        </div>
      </div>
    );
  });
  return (
    <div className="col-5" id="list">
      <div className="row">{transformedData}</div>
    </div>
  );
};

export default ListItem;
