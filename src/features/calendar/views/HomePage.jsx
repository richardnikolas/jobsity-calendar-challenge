import React from 'react';
import CalendarContainer from './CalendarContainer';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import WelcomeContainer from './WelcomeContainer';
import './styles/Home.css';

const HomePage = ({ userIdentified, setUserIdentified, setUserName }) => {

  let sessionStorageUser = window.sessionStorage.getItem('user') ?? "";

  if (sessionStorageUser !== "") {
    setUserIdentified(true);
    setUserName(sessionStorageUser);
  }

  return (
    <div className="container">
      <WelcomeContainer userIdentified={userIdentified} />
      <HeaderContainer />
      <SidebarContainer />
      <CalendarContainer />
    </div>
  );
};

export default HomePage;