import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calendarActions } from '../redux';
import Sidebar from './Sidebar';

const mapStateToProps = ({ calendar }) => {
  return {
    daysOfTheMonth: calendar.daysOfTheMonth
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateDaysOfTheMonth: calendarActions.updateDaysOfTheMonth
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Sidebar);