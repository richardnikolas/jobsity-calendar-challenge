import { connect } from 'react-redux';
import Header from './Header';

const mapStateToProps = ({ calendar }) => {
  return {
    user: calendar.user
  };
};

export default connect(
  mapStateToProps
)(Header);