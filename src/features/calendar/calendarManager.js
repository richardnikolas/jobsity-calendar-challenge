import calendarService from './calendarService';

class CalendarManager {
  addNewReminder = ({daysOfTheMonth, chosedDay, newReminder, currentWeather}) => {
    var updatedDays = [];

    newReminder = { ...newReminder, weather: currentWeather };

    for(let i = 0; i < daysOfTheMonth.length; i++) {
      let actualDay = daysOfTheMonth[i];

      if(actualDay.id == `thisMonth${chosedDay}`)
        actualDay.reminders.push(newReminder);
  
      updatedDays.push(actualDay);
    }

    // updatedDays.forEach(day => {
    //   if (day.reminders.length > 1) {
    //     var organizedReminders = this.organizeRemindersByTime({ reminders: day.reminders});
    //     day.reminders = organizedReminders;
    //   }
    // });

    return updatedDays;
  };

  // organizeRemindersByTime = ({ reminders }) => {
  //   return reminders.sort((a, b) => b.date - a.date);
  // };

  getWeatherForCity = cityName => {
    return calendarService.getWeatherByCity(cityName);
  };

  getWeatherIconUrl = icon => {
    return `${window.env.REACT_OPEN_WEATHER_ICONS_URL}/${icon}@2x.png`;
  };
}

export default new CalendarManager();