import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import AuthNavbar from '../layout/Navbar';
import TicketView from '../../containers/TicketView';
import TicketForm from '../../components/Form/TicketForm';
import TicketList from '../../components/List/TicketList';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
  return (
    <div className="dashboard-container">
    <AuthNavbar />
    <TicketList />
    <TicketForm />
    </div>
  );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);