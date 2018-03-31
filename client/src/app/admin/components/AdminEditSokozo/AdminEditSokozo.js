import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AdminAddIgisokozoForm from '../AdminAddIgisokozoForm/AdminAddIgisokozoForm';

class AdminEditSokozo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch();
  }

  render() {
    return (
      <AdminAddIgisokozoForm />
    );
  }
}
AdminEditSokozo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default AdminEditSokozo;
