import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import EmailFormModal from '../EmailFormModal/EmailFormModal';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    this.setState({ showModal: true });
  }

  closeEmailFormModal() {
    this.setState({ showModal: false });
    // change the url without reloading
    // this.props.history.push('/');
  }

  render() {
    return (
      <EmailFormModal
        modalTitle="Login"
        emailFormButtonText="Login"
        showModal={this.state.showModal}
        closeEmailFormModal={this.closeEmailFormModal.bind(this)}
      />
    );
  }
}
// LoginForm.propTypes = {};

export default LoginForm;
