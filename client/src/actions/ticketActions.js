import axios from 'axios';

export const CREATE = "create new ticket";
export const READ = "fetch all tickets";
export const UPDATE = "update ticket";
export const DELETE = "delete ticket";
export const FETCH_TICKETS_BEGIN = "begin fetching tickets";
export const FETCH_TICKETS_SUCCESS = "Tickets fetched successfully";
export const FETCH_TICKETS_FAILURE = "Failed to fetch tickets";

export const createTicket = (ticket) => ({
  type: CREATE,
  payload: ticket
});

export const readTickets = () => {
  return(dispatch) => {
    dispatch(fetchTicketsBegin());
    return axios.get('/api/tickets')
      .then(({data}) => {
        dispatch(fetchTicketsSuccess(data));
      })
      .catch(error => dispatch(fetchTicketsFailure(error)));
  };
};

export const updateTicket = (ticket) => ({
  type: UPDATE,
  payload: { ticket }
});

export const deleteTicket = (_id) => ({
  type: DELETE,
  payload: { _id }
});

export const fetchTicketsBegin = () => ({
  type: FETCH_TICKETS_BEGIN,
});
export const fetchTicketsSuccess = tickets => ({
  type: FETCH_TICKETS_SUCCESS,
  payload: { tickets }
});
export const fetchTicketsFailure = errors => ({
  type: FETCH_TICKETS_FAILURE,
  payload: { errors }
});

