import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    width: '100%',
    height: '3vh',
    gridTemplateColumns: 'repeat(7, 1fr)',
    backgroundColor: theme.palette.primary.main,
    placeItems: 'center'
  },
  child: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 600
  }
}));

const DaysOfTheWeek = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.child}>Sunday</div>
      <div className={classes.child}>Monday</div>
      <div className={classes.child}>Tuesday</div>
      <div className={classes.child}>Wednesday</div>
      <div className={classes.child}>Thursday</div>
      <div className={classes.child}>Friday</div>
      <div className={classes.child}>Saturday</div>
    </div>
  );
};

export default DaysOfTheWeek;