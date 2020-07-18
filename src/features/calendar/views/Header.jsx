import React from 'react';
import moment from 'moment';
import './styles/Header.css';

const Header = function() {
  const dateObject = moment();

  console.log('Hours', dateObject.hour());

  return (
    <section className="header-section">
      <div className="header">

      </div>
    </section>
  );
};

export default Header;