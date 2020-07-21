import { batch } from 'react-redux';
import * as calendarActions from './calendarActions';
import calendarManager from '../calendarManager';

export const getWeatherForCity = cityName => async dispatch => {

  try {
    dispatch(calendarActions.setIsLoading(true));

    let weather = await calendarManager.getWeatherForCity(cityName);
    let iconUrl = calendarManager.getWeatherIconUrl(weather.icon);

    let fullWeather = { ...weather, iconUrl: iconUrl };

    batch(() => {
      dispatch(calendarActions.setCurrentWeather(fullWeather));
      dispatch(calendarActions.setWeatherServiceError(false));
    });    
  }
  catch {
    dispatch(calendarActions.setWeatherServiceError(true));
  }
  finally {
    batch(() => {
      dispatch(calendarActions.setIsLoading(false));
    });    
  }
};