import React from 'react';

const HoursTable = props => {
  const dayOpen = `${props.day.toLowerCase()}_open`;
  const dayClose = `${props.day.toLowerCase()}_close`;
  return props.active ? (
    <tr id={`day-${props.index}`}>
      <th scope="row">{props.day}</th>
      <th>
        {props.activeItemData[dayOpen]} - {props.activeItemData[dayClose]}
      </th>
    </tr>
  ) : (
    <tr id={`day-${props.index}`}>
      <td scope="row">{props.day}</td>
      <td>
        {props.activeItemData[dayOpen]} - {props.activeItemData[dayClose]}
      </td>
    </tr>
  );
};

export default HoursTable;
