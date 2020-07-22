import calendarReducer, { INITIAL_STATE } from './calendarReducer';
import * as calendarActions from './calendarActions';
import { emptyDaysOfTheMonth, stateWithEmptyDays, newDayOfTheMonth, currentWeatherMock } from '../mocks/calendarMock.ig';

describe('Calendar - Reducer', () => {
  const state = {
    ...INITIAL_STATE
  };

  it('has a initial state', () => {
    const newState = calendarReducer(undefined, { type: '', payload: undefined });
    expect(newState).toStrictEqual(INITIAL_STATE);
  });

  it('should SET_DAY_OF_THE_MONTH', () => {
    const action = {
      type: calendarActions.SET_DAY_OF_THE_MONTH,
      payload: newDayOfTheMonth
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      daysOfTheMonth: [...state.daysOfTheMonth, action.payload]
    });
    expect(newState.daysOfTheMonth[0].id).toBe('thisMonth1');
  });

  it('should SET_UPDATE_DAYS_OF_THE_MONTH', () => {
    const action = {
      type: calendarActions.SET_UPDATE_DAYS_OF_THE_MONTH,
      payload: emptyDaysOfTheMonth
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      daysOfTheMonth: action.payload
    });
    expect(newState.daysOfTheMonth.length).toBe(31);
  });

  it('should SET_WEATHER_SERVICE_ERROR', () => {
    const action = {
      type: calendarActions.SET_WEATHER_SERVICE_ERROR,
      payload: true
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      status: {
        weatherServiceError: action.payload
      }
    });
    expect(newState.status.weatherServiceError).toBe(true);
  });

  it('should SET_CURRENT_WEATHER', () => {
    const action = {
      type: calendarActions.SET_CURRENT_WEATHER,
      payload: currentWeatherMock
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      currentWeather: { ...action.payload }
    });
    expect(newState.currentWeather.id).toBe(500);
    expect(newState.currentWeather.description).toBe("light rain");
  });

  it('should SET_USER_NAME', () => {
    const action = {
      type: calendarActions.SET_USER_NAME,
      payload: "John Doe"
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      user: { name: action.payload }
    });
    expect(newState.user.name).toBe("John Doe");
  });

  it('should SET_USER_IDENTIFIED', () => {
    const action = {
      type: calendarActions.SET_USER_IDENTIFIED,
      payload: true
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      userIdentified: action.payload
    });
    expect(newState.userIdentified).toBe(true);
  });

  it('should SET_IS_LOADING', () => {
    const action = {
      type: calendarActions.SET_IS_LOADING,
      payload: true
    };

    const newState = calendarReducer(INITIAL_STATE, action);

    expect(newState).toStrictEqual({
      ...INITIAL_STATE,
      isLoading: action.payload
    });
    expect(newState.isLoading).toBe(true);
  });
});
