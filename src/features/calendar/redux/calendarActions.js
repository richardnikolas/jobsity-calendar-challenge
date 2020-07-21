export const SET_DAY_OF_THE_MONTH = 'calendar/SET_DAY_OF_THE_MONTH';
export const SET_UPDATE_DAYS_OF_THE_MONTH = 'calendar/SET_UPDATE_DAYS_OF_THE_MONTH';
export const SET_WEATHER_SERVICE_ERROR = 'calendar/SET_WEATHER_SERVICE_ERROR';
export const SET_CURRENT_WEATHER = 'calendar/SET_CURRENT_WEATHER';
export const SET_USER_NAME = 'calendar/SET_USER_NAME';
export const SET_USER_IDENTIFIED = 'calendar/SET_USER_IDENTIFIED';
export const SET_IS_LOADING = 'calendar/SET_IS_LOADING';

export const setDayOfTheMonth = dayOfTheMonth => ({
  type: SET_DAY_OF_THE_MONTH,
  payload: dayOfTheMonth
});

export const updateDaysOfTheMonth = daysOfTheMonth => ({
  type: SET_UPDATE_DAYS_OF_THE_MONTH,
  payload: daysOfTheMonth
});

export const setWeatherServiceError = status => ({
  type: SET_WEATHER_SERVICE_ERROR,
  payload: status
});

export const setCurrentWeather = weather => ({
  type: SET_CURRENT_WEATHER,
  payload: weather
});

export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName
});

export const setUserIdentified = identified => ({
  type: SET_USER_IDENTIFIED,
  payload: identified
});

export const setIsLoading = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading
});