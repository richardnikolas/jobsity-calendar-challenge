export const SET_DAY_OF_THE_MONTH = 'calendar/SET_DAY_OF_THE_MONTH';
export const SET_UPDATE_DAYS_OF_THE_MONTH = 'calendar/SET_UPDATE_DAYS_OF_THE_MONTH';

export const setDayOfTheMonth = dayOfTheMonth => ({
  type: SET_DAY_OF_THE_MONTH,
  payload: dayOfTheMonth
});

export const updateDaysOfTheMonth = daysOfTheMonth => ({
  type: SET_UPDATE_DAYS_OF_THE_MONTH,
  payload: daysOfTheMonth
});