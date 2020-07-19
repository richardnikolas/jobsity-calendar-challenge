import React from 'react';
import './styles/CalendarDayReminder.css';

const CalendarDayReminder = function({reminder}) {
  return (
    <div className="reminder" style={{ backgroundColor: `${reminder.color}` }}>
      <p className="text">{reminder.text}</p>
    </div>
  );
};

export default CalendarDayReminder;