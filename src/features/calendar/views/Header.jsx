import React from 'react';
import moment from 'moment';
import './styles/Header.css';

const Header = function ({ user }) {
  const dateObject = moment();

  const getGreeting = () => {
    let hour = dateObject.hour();
    let minute = dateObject.minute();
    let fullGreeting = '';

    if (user.name && user.name !== '')
      fullGreeting = `, ${user.name}`

    if (hour > 4 && hour <= 12)
      return `Good morning${fullGreeting}`;
    else if (hour > 12 && hour <= 17)
      return `Good afternoon${fullGreeting}`;
    else if (hour > 17 && hour === 18 && minute < 59)
      return `Good evening${fullGreeting}`;
    else
      return `Good night${fullGreeting}`;
  };

  return (
    <section className="header-section">
      <div className="header">
        <div className="greeting-container">
          <h1 className="greeting">{getGreeting()}</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;