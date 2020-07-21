import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calendarActions, calendarOperations } from '../redux';
import Sidebar from './Sidebar';

const mapStateToProps = ({ calendar }) => {
  return {
    daysOfTheMonth: calendar.daysOfTheMonth,
    weatherServiceError: calendar.status.weatherServiceError,
    currentWeather: calendar.currentWeather,
    isLoading: calendar.isLoading
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateDaysOfTheMonth: calendarActions.updateDaysOfTheMonth,
      getWeatherForCity: calendarOperations.getWeatherForCity,
      setWeatherServiceError: calendarActions.setWeatherServiceError,
      setCurrentWeather: calendarActions.setCurrentWeather
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Sidebar);