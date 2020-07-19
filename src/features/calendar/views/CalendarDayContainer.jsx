import { connect } from 'react-redux';
import CalendarDay from './CalendarDay';

const mapStateToProps = ({ calendar }) => {
  return {
    daysOfTheMonth: calendar.daysOfTheMonth
  };
};

export default connect(
  mapStateToProps
  )(CalendarDay);