import React from 'react';
import PropTypes from 'prop-types';
import { Row, Alert, Form, FormGroup, FormControl, Button, HelpBlock, Col } from 'react-bootstrap';

/* contain a form (that needs to be flexible enough to be used blank or pre-filled
* with existing card values.) and an overlay. The form will appear as a modal on top
* of the Kanban board, and the overlay will be used behind the modal to “darken”
* everything behind it. */
const CodeForm = (props) => {
  if (!props.showCodeForm) {
    return null;
  }
  return (
    <Form inline onSubmit={props.handleCodeSubmit}>
      <Row>
        <FormGroup bsSize="small">
          <Alert bsStyle="warning">
            <strong>Enter the code sent to your email to login!</strong>
          </Alert>
        </FormGroup>
      </Row>
      <Row>
        <FormGroup
          bsSize="small"
          controlId="formInlineCode"
          validationState={props.getCodeValidationState()}
        >
          <Col sm={10}>
            <FormControl
              type="password"
              value={props.loginCode}
              placeholder="enter code"
              onChange={props.handleLoginCodeChange}
            />
          </Col>
          <FormControl.Feedback />
          <HelpBlock>{props.help}</HelpBlock>
        </FormGroup>{' '}
        <FormGroup bsSize="small" controlId="buttonsRow">
          <Col sm={10}>
            <Button
              type="submit"
              bsStyle="warning"
            >
              Login
            </Button>
          </Col>
        </FormGroup>
      </Row>
    </Form>
  );
};

CodeForm.propTypes = {
  handleCodeSubmit: PropTypes.func.isRequired,
  handleLoginCodeChange: PropTypes.func.isRequired,
  help: PropTypes.string.isRequired,
  getCodeValidationState: PropTypes.func.isRequired,
  loginCode: PropTypes.number.isRequired,
  showCodeForm: PropTypes.bool.isRequired,
  // submitButtonText: PropTypes.string.isRequired,
};
export default CodeForm;
