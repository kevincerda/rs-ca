import React from 'react';

const DetailsCard = props => {
  return props.detailsActive ? (
    <div className="col-8 offset-2" id="details-card">
      <p> Details</p>
    </div>
  ) : null;
};

export default DetailsCard;
