import React, { Component } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import { createTicket, deleteTicket, updateTicket, readTickets } from '../actions/ticketActions';
import TicketList from "../components/List/TicketList";
import TicketForm from '../components/Form/TicketForm';
import uuid from 'uuid';

class TicketView extends Component {
  constructor(props) {
    super(props);
    this.state = { openAddForm: false }
  };



  //function to trigger from rendering
  handleAddClick = () => this.setState({ openAddForm: true });

  //function to handle ticket addition
  handleAddTicket = ({ name, issue, priority, status }) => {
    if(name === "") name = "";
    if(issue === "") issue = "";
    if(priority === "") priority = "";
    if(status === "") status = "";



    const newTicket = {
      id: uuid.v4(),
      name, issue, priority, status
    }
    this.props.createTicket(newTicket);
    this.handleCancel();
    axios.post('/api/tickets',{...newTicket}).then(({data:{name}})=>{ 
      console.log(`Ticket - ${name} added successfully`);   
    }).catch(e => console.log("Addition failed , Error ", e));
  }

  //function to handle ticket deletion
  handleDeleteTicket = (_id) => this.props.deleteTicket(_id);

  //function to handle ticket updates
  handleUpdateTicket = (ticket) => this.props.updateTicket(ticket);
  
  //function to unmount form component or in short close it
  handleCancel = () => this.setState({ openAddForm: false });

  render() {
    return (
      <>

        {/* Menu component starts */}
        <div className="menu" >

          <div className="heading menu-row">
            <div className="menu-item-name">Name</div>
            <div className="menu-item-issue">Issue</div>
            <div className="menu-item-priority">Priority</div>
            <div className="menu-item-status">Status</div>
            <div className="operations"> Operations</div>
          </div>

          {this.props.tickets.length > 0 ? this.props.tickets.map((ticket, i) => {
            return <TicketList key={ticket.name + "-" + ticket.issue + "-" + ticket.priority + "-" + ticket.status + "-" + ticket._id} id={ticket._id}
              name={ticket.name} issue={ticket.issue} priority={ticket.priority} status={ticket.status}
              handleDelete={this.handleDeleteTicket}
              handleUpdate={this.handleUpdateTicket}
              closeForm={this.handleCancel} />
          }) : (
              <div className="menu-row">
                <div className="msg">List is empty.</div>
              </div>
            )}

        </div>
        {/* Menu component ends */}

        {!this.state.openAddForm ? (
          <span onClick={this.handleAddClick} className="add btn"><i className="fas fa-plus"></i></span>
        ) : (
            <div className="menu"><TicketForm addTicket={this.handleAddTicket} closeForm={this.handleCancel} /></div>
          )}
      </>
    )
  };
};

const mapStateToProps = ({ tickets }) => ({
  tickets
});

export default connect(mapStateToProps, { createTicket, deleteTicket, updateTicket, readTickets })(TicketView);