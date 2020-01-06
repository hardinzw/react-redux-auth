import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const TicketListRow = ({ ticket }) => {
  const {
    _id,
    project,
    issue
   } = ticket

  return (
    <tr>
      <td>{_id}</td>
      <td>{project}</td>
      <td>{issue}</td>
    </tr>
  );
};

export default TicketListRow;