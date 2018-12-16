import React from 'react';

const ListItem = props => {
  const transformedData = props.data.map((truck, index) => {
    return (
      <div className="col-10 offset-1 result-item" key={truck.id}>
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
            <button type="button" class="btn btn-dark btn-block">
              Directions
            </button>
          </div>
          <div className="col-6">
            <button type="button" class="btn btn-dark btn-block">
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
          <h5>Viewing All {props.data.length} Taco Trucks</h5>
        </div>
      </div>
      <div className="row">
        {transformedData[0]}
        {transformedData[1]}
      </div>
    </div>
  );
};

export default ListItem;
