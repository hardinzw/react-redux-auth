import { combineReducers } from "redux";
import authReducer from './authReducers';
import errorReducer from "./errorReducers";
import ticketReducer from './ticketReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  tickets: ticketReducer
});