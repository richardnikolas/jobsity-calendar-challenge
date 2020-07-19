
class CalendarManager {
  addNewReminder = ({daysOfTheMonth, chosedDay, newReminder}) => {
    const updatedDays = [];

    for(let i = 0; i < daysOfTheMonth.length; i++) {
      let actualDay = daysOfTheMonth[i];

      if(actualDay.id == `thisMonth${chosedDay}`)
        actualDay.reminders.push(newReminder);
  
      updatedDays.push(actualDay);
    }
  
    return updatedDays;
  };
}

export default new CalendarManager();