import React from 'react';
import CalendarContainer from './CalendarContainer';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import './styles/Home.css';

const HomePage = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <SidebarContainer/>
      <CalendarContainer />
    </div>
  );
};

export default HomePage;