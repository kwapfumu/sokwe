import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, Col, FieldGroup, Form, FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      help: '',
    };
  }

  // custom propValidator:todo=> refactor it when u less tired...
  getValidationState() {
    // eslint-disable-next-line prefer-destructuring
    const length = this.state.email.length;
    // eslint-disable-next-line no-control-regex no-useless-escape
    const emailPattern = new RegExp('/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig');
    if (length > 7 && this.state.email === emailPattern) {
      return 'success';
    }

    this.setState({ help: `${label} is not a valid email address` });
    return 'error';
  }

  // handles form field change
  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  // handles the modal closing (when the user clicks outside the modal).
  handleClose(e) {
    e.preventDefault();
    this.props.handleClose();
  }

  FieldGroup(id, label, help, ...props) {
    return (
      <FormGroup
        bsSize="small"
        controlId={id}
        validationState={this.getValidationState(label)}
      >
        <Col sm={10}>
          <FormControl {...props} />
        </Col>
        <FormControl.Feedback />
        <HelpBlock>{this.state.help}</HelpBlock>
      </FormGroup>
    );
  }

  render() {
    return (
      <Form horizontal onSubmit={this.props.handleSubmit.bind(this)}>
        <FormGroup bsSize="small">
          <Alert bsStyle="warning">
            <strong>Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!</strong>
          </Alert>
        </FormGroup>
        <FieldGroup
          id="email"
          type="email"
          label="userEmail"
          value={this.state.email}
          placeholder="enter email"
          onChange={this.handleChange.bind(this)}
        />
        <FormGroup bsSize="small" controlId="buttonsRow">
          <Col sm={10}>
            <Button
              type="submit"
              bsStyle="warning"
              disabled
              value=""
            >
              {this.props.emailFormButtonText}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

EmailForm.propTypes = {
  emailFormButtonText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EmailForm;
