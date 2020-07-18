import React from 'react';
import PropTypes from 'prop-types';
import CalendarContainer from './CalendarContainer';
import HeaderContainer from './HeaderContainer';
import SidebarContainer from './SidebarContainer';
import { makeStyles } from '@material-ui/core/styles';
import './styles/Home.css';

const useStyles = makeStyles(theme => ({
  
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <CalendarContainer className="calendar" />
    </div>
  );
};

export default HomePage;