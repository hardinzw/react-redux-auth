import axios from "axios";

export default {
  
  getTickets: function() {
    return axios.get("/api/tickets");
  },
  
  getTicket: function(id) {
    return axios.get("/api/tickets/" + id);
  },
  
  deleteTicket: function(id) {
    return axios.delete("/api/tickets/" + id);
  },
  
  saveTicket: function(ticketData) {
    return axios.post("/api/tickets", ticketData);
  }
};