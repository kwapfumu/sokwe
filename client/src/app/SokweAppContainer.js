import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import SokweAppLayout from './SokweAppLayout';

const mapStateToProps = (state, ownProps) => {
  return {
    sokweUsers: state.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const SokweAppContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SokweAppLayout));

export default SokweAppContainer;
