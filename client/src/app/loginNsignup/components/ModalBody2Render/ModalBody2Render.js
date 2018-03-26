import React from 'react';
import PropTypes from 'prop-types';
import EmailForm from '../EmailForm/EmailForm';
import CodeForm from '../CodeForm/CodeForm';

const ModalBody2Render = (props) => {
  if (props.showEmailForm === true && props.showCodeForm === false) {
    return (
      <EmailForm
        emailFormButtonText="Send code"
        handleSubmit={props.handleEmailSubmit.bind(this)}
        handleClose={props.handleClose.bind(this)}
      />
    );
  } else if (props.showEmailForm === false && props.showCodeForm === true) {
    return (
      <CodeForm
        codeFormButtonText="Login"
        handleSubmit={props.handleCodeSubmit.bind(this)}
        handleClose={props.handleClose.bind(this)}
      />
    );
  }

  return (
    <EmailForm
      emailFormButtonText="Send code"
      handleSubmit={props.handleEmailSubmit.bind(this)}
      handleClose={props.handleClose.bind(this)}
    />
  );
};

ModalBody2Render.propTypes = {
  showCodeForm: PropTypes.bool.isRequired,
  showEmailForm: PropTypes.bool.isRequired,
  handleEmailSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCodeSubmit: PropTypes.func.isRequired,
};
export default ModalBody2Render;
