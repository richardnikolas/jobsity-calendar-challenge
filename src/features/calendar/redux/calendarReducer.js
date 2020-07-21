import * as calendarActions from './calendarActions';

export const INITIAL_STATE = {
  user : {
    name: ''
  },
  daysOfTheMonth: [],
  status: {
    weatherServiceError: false
  },
  currentWeather: {},
  isLoading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case calendarActions.SET_DAY_OF_THE_MONTH:
      return { ...state, daysOfTheMonth: [ ...state.daysOfTheMonth, action.payload ] };
    case calendarActions.SET_UPDATE_DAYS_OF_THE_MONTH:
      return { ...state, daysOfTheMonth: action.payload };
    case calendarActions.SET_WEATHER_SERVICE_ERROR:
      return {
        ...state,
        status: {
          weatherServiceError: action.payload
        }
      };
    case calendarActions.SET_CURRENT_WEATHER:
      return { ...state, currentWeather: { ...action.payload } };
    case calendarActions.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }  
    default:
      return state;
  }
};
