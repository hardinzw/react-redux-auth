import { CREATE, READ, UPDATE, DELETE, updateTicket } from '../actions/ticketActions';
import { FETCH_TICKETS_BEGIN, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from '../actions/ticketActions';

const initialState = {
  tickets: [],
  loading: false,
  error: null
};

const ticketReducer = (state = initialState, action) => {
  switch(action.type) {
    case CREATE:
      return {
        tickets: [...state.tickets, action.payload.ticket]
      }
    case READ:
      return state;

    case UPDATE: {
      const updatedTicket = {...action.payload.tickets};
      return {
        tickets: [...state.tickets].map(ticket => {
          if(ticket._id === updatedTicket._id) {
            return updatedTicket
          }
          else return ticket;
        })
      };
    };
    case DELETE: {
      const {_id} = action.payload;
      return {
        tickets: [...state.tickets].filter(ticket => ticket._id !== _id)
      };
    };
    case FETCH_TICKETS_BEGIN: return {
      ...state,
      loading: true,
      errors: null
    };
    case FETCH_TICKETS_SUCCESS: return {
      ...state,
      loading: false,
      tickets: action.payload.tickets
    };
    case FETCH_TICKETS_FAILURE: return {
      ...state,
      loading: false,
      errors: action.payload.errors,
      tickets: []
    }
    default:
      return state;
  };
};

export default ticketReducer;