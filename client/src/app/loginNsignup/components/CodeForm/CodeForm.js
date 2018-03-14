import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Alert, FieldGroup, Form, FormGroup, FormControl, Button, HelpBlock, Col } from 'react-bootstrap';

/* contain a form (that needs to be flexible enough to be used blank or pre-filled
* with existing card values.) and an overlay. The form will appear as a modal on top
* of the Kanban board, and the overlay will be used behind the modal to “darken”
* everything behind it. */
class CodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCode: '',
      help: '',
    };
  }

  // custom propValidator:todo=> refactor it when u less tired...
  getValidationState() {
    const length = this.state.value.length;
    const textPattern = new RegExp('^[a-z]');
    if (length > 7 && length < 10) {
      return 'success';
    } else if (length > 10) {
      this.setState({ help: '${label} should be max 10 characters long' });
      return 'warning';
    } else if (length < 7) {
      this.setState({ help: '${label} should be at least 7 characters long' });
      return 'error';
    } else if (typeof (this.state.value) !== 'string' || this.state.value === textPattern) {
      this.setState({ help:'${label} should be a text' });
      return 'error';
    }
  }

  // handles form field change
  handleChange(e) {
    this.setState({ loginCode: e.target.value });
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
        validationState={this.getValidationState()}
      >
        <Col sm={10}>
          <FormControl {...props} />
        </Col>
        <FormControl.Feedback />
        <HelpBlock>{help}</HelpBlock>
      </FormGroup>
    );
  }

  render() {
    return (
      <Form horizontal onSubmit={this.props.handleSubmit.bind(this)}>
        <FormGroup bsSize="small">
          <Alert bsStyle="warning">
            <strong>Enter the code sent to your email to login!</strong>
          </Alert>
        </FormGroup>
        <FieldGroup
          id="userCode"
          type="password"
          label="userCode"
          value={this.state.loginCode}
          placeholder="enter code"
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
              {this.props.codeFormButtonText}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}


CodeForm.propTypes = {
  codeFormButtonText: PropTypes.string.isRequired,
  loginCode: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default CodeForm;
