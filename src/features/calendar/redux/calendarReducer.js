import * as calendarActions from './calendarActions';

export const INITIAL_STATE = {
  user : {
    name: '',
    city: ''
  },
  reminders: [],
  status: {
    weatherServiceError: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};
