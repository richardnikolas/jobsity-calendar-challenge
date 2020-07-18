import React from 'react';
import clsx from 'clsx';
import './styles/Calendar.css';

const CalendarDay = function({day, reminders, styles}) {    

  return (
    <div className={clsx("calendar-day", styles)}>
      <p>{day}</p>
    </div>
  );
};

export default CalendarDay;
