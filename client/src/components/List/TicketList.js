import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { readTickets, fetchTicketsFailure } from '../../actions/ticketActions';
import Table from 'react-bootstrap/Table';
import TicketListRow from './TicketListRow';
import TicketForm from '../Form/TicketForm';

const TicketList = ({ tickets }) =>
  <div className="table-container" style={{width: "60%", marginLeft: "20%"}}>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Project</th>
          <th>Issue</th>
        </tr>
      </thead>
      <tbody>
      {(Object.keys(tickets)).map(ticket =>
        <TicketListRow
          key={ticket._id}
          ticket={ticket}
          project={ticket.project}
          issue={ticket.issue}
        />
      )}
      </tbody>
    </Table>
  </div>

const mapStateToProps = state => ({
  tickets: state
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    readTickets: readTickets,
    error: fetchTicketsFailure,
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TicketList);