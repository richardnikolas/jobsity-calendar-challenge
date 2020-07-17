import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { calendarReducer } from '../features/calendar/redux';

export default history => 
  combineReducers({
    router: connectRouter(history),
    calendar: calendarReducer
  });
