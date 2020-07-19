import React from 'react';
import clsx from 'clsx';
import CalendarDayReminder from './CalendarDayReminder'
import './styles/Calendar.css';
import './styles/CalendarDay.css';

const CalendarDay = function({day, reminders, styles}) {    
  const getReminders = () => {
    let thisReminders = [];

    if(reminders && reminders.length > 0) {
      for(let i = 0; i < reminders.length; i++) {        
        thisReminders.push(
          <CalendarDayReminder reminder={reminders[i]} key={`keyCD${i}`} />
        );
      }
    }

    return thisReminders;
  };

  return (
    <div className={clsx("calendar-day", styles)}>
      <p>{day}</p>
      <div className="reminders-area">
        {getReminders()}
      </div>
    </div>
  );
};

export default CalendarDay;
