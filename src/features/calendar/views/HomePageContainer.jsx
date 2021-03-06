import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calendarActions } from '../redux';
import HomePage from './HomePage';

const mapStateToProps = ({ calendar }) => {
  return {
    userIdentified: calendar.userIdentified
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setUserIdentified: calendarActions.setUserIdentified,
      setUserName: calendarActions.setUserName
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);