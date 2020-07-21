import calendarService from './calendarService';
import calendarManager from './calendarManager';
import { newReminderMock, emptyDaysOfTheMonth, currentWeatherMock } from './mocks/calendarMock.ig';

describe('Calendar - Manager', () => {

  it('should addNewReminder', () => {
    let updatedDays = [];

    updatedDays = calendarManager.addNewReminder({ 
      daysOfTheMonth: emptyDaysOfTheMonth, 
      chosedDay: 1, 
      newReminder: newReminderMock, 
      currentWeather: currentWeatherMock }
    );

    emptyDaysOfTheMonth[0] = updatedDays[0];

    expect(updatedDays).toStrictEqual(emptyDaysOfTheMonth);
  });

  it('should getWeatherForCity for valid city name', async () => {
    let weather = await calendarManager.getWeatherForCity('New York');

    expect(weather).not.toBeNull();
    expect(weather.description).not.toBeNull();
    expect(weather.icon).not.toBeNull();
    expect(weather.main).not.toBeNull();
  });

  it('should getWeatherForCity for invalid city name', async () => {
    let weather = {};
    try {
      weather = await calendarManager.getWeatherForCity('aaaaaaaaaa');
    }
    catch {
      expect(weather).toStrictEqual({});
    }
  });

  it('should getWeatherIconUrl', () => {
    let icon = calendarManager.getWeatherIconUrl('10d');

    expect(icon).toBe('http://openweathermap.org/img/wn/10d@2x.png');
  });
});
