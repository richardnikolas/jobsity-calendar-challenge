import React, { useEffect } from 'react';
import DaysOfTheWeek from '../../../shared/components/DaysOfTheWeek';
import CalendarDay from './CalendarDay';
import CalendarDayContainer from './CalendarDayContainer';
import moment from 'moment';
import './styles/Calendar.css';

const Calendar = function ({daysOfTheMonth, setDayOfTheMonth}) {
  const dateObject = moment();
  let firstDay = moment(dateObject).startOf("month").format("d"); 
  let daysInMonth = moment(dateObject).daysInMonth();

  const createMonthDays = () => {
    for(let i = 1; i < daysInMonth+1; i++) {
      let actualMonth = moment().month() + 1;
      setDayOfTheMonth({id:`thisMonth${i}`, day: i, month: actualMonth, reminders: []});
    }
  };

  useEffect(() => {
    createMonthDays();
  }, []);

  const createPastDays = () => {
    let empty = [];

    for(let i = 0; i < firstDay; i++){
      let day = moment().startOf('month').subtract(firstDay-i, 'days').date();
      empty.push(        
        <CalendarDayContainer daysOfTheMonth={daysOfTheMonth} day={day} styles={'inactiveDays'} key={`pastDays${i}`}/>
      );
    }
    
    return empty;
  };

  const fillDaysOfTheMonth = () => {
    let days = [];

    if(daysOfTheMonth.length > 0) {
      for(let i = 0; i < daysInMonth; i++)
        days.push(
          <CalendarDay day={daysOfTheMonth[i].day} reminders={daysOfTheMonth[i].reminders} key={`filledDays${i}`}/>
        );
    }

    return days;
  };

  const createFutureDays = () => {
    let futureDays = [];
    let totalDays = createPastDays().length + daysOfTheMonth.length;
    let j = 1;

    for(let i = totalDays; i < 35; i++) {
      let day = moment().endOf('month').add(j, 'days').date();
      futureDays.push(
        <CalendarDay day={day} styles={'inactiveDays'} key={`futureDays${i}`} />
      );
      j++;
    }

    return futureDays;
  }

  return (
    <section className="calendar-section">
      <DaysOfTheWeek />
      <div className="calendar">
        {createPastDays()}
        {fillDaysOfTheMonth()}
        {createFutureDays()}
      </div>
    </section>         
  );
}

export default Calendar;