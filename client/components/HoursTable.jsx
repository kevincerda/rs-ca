import React from 'react';

const HoursTable = props => {
  return props.active ? (
    <tr id={`day-${props.index}`}>
      <th scope="row">{props.day}</th>
      <th>
        {`${props.day}_open`} - {`${props.day}_close`}
      </th>
    </tr>
  ) : (
    <tr id={`day-${props.index}`}>
      <td scope="row">{props.day}</td>
      <td>
        {`${props.day}_open`} - {`${props.day}_close`}
      </td>
    </tr>
  );
};

export default HoursTable;
