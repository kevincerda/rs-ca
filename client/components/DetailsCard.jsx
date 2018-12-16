import React from 'react';

const DetailsCard = props => {
  return props.detailsActive ? <p> Details</p> : null;
};

export default DetailsCard;
