import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calendarActions } from '../redux';
import Calendar from './Calendar';

const mapStateToProps = ({ calendar }) => {
  return {
    daysOfTheMonth: calendar.daysOfTheMonth
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setDayOfTheMonth: calendarActions.setDayOfTheMonth,
      updateDaysOfTheMonth: calendarActions.updateDaysOfTheMonth
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Calendar);