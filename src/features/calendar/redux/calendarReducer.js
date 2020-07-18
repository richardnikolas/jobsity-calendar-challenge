import * as calendarActions from './calendarActions';

export const INITIAL_STATE = {
  user : {
    name: '',
    city: ''
  },
  daysOfTheMonth: [],
  status: {
    weatherServiceError: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case calendarActions.SET_DAY_OF_THE_MONTH:
      return { ...state, daysOfTheMonth: [ ...state.daysOfTheMonth, action.payload ] }
    default:
      return state;
  }
};
