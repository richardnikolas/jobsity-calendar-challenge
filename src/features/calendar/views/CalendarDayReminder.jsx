import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import './styles/CalendarDayReminder.css';
import './styles/Sidebar.css';
import reactCSS from 'reactcss';

const CalendarDayReminder = function ({ reminder }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  let cardHeight = reminder.city !== "" ? '190px' : '100px';

  const reactStyles = reactCSS({
    'default': {
      color: {
        width: 90,
        height: 15,
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: `${reminder.color}`
      },
      icon: {
        background: `url(${reminder.weather.iconUrl}) no-repeat`
      },
      heightOfCard: {
        height: `${cardHeight}`
      }
    }
  });

  return (
    <>
      <div className="reminder" onClick={handleClickOpen} style={{ backgroundColor: `${reminder.color}` }}>
        <p className="text">{reminder.text}</p>
      </div>

      <Dialog open={isOpen} onClose={handleClose} maxWidth='lg'>
        <div className="reminder-details-container" style={reactStyles.heightOfCard}>
          <div className="reminder-details-color" style={reactStyles.color} />

          <div className="reminder-details-text">
            <p className="reminder-details-label">Description: </p>
            <p className="reminder-details-value">{reminder.text}</p>
          </div>

          {reminder.city !== '' ?
            <>
              <div className="reminder-details-city">
                <p className="reminder-details-label">City: </p>
                <p className="reminder-details-value">{reminder.city}</p>
              </div>

              <div className="div-weather reminder-details-weather">
                <p className="weather-label">Weather: </p>
                <p className="weather-description">{reminder.weather.description}</p>
                <div style={reactStyles.icon} className="weather-icon" />
              </div>
            </>
            : null}
        </div>
      </Dialog>
    </>
  );
};

export default CalendarDayReminder;