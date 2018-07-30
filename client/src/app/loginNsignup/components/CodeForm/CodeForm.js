import React from 'react';
import PropTypes from 'prop-types';
import { Row, Alert, Form, FormGroup, FormControl, Button, HelpBlock, Col } from 'react-bootstrap';
import '../../scss/loginForm.scss';

/* contain a form (that needs to be flexible enough to be used blank or pre-filled
* with existing card values.) and an overlay. The form will appear as a modal on top
* of the Kanban board, and the overlay will be used behind the modal to “darken”
* everything behind it. */
const CodeForm = (props) => {
  if (!props.showCodeForm) {
    return null;
  }
  return (
    <Row className="loginCodeFormRow">
      <Form inline onSubmit={props.handleCodeSubmit}>
        <Row>
          <Col xsOffset={1} smOffset={2} mdOffset={1} lgOffset={1} xs={10} sm={10} md={8} lg={8}>
            <FormGroup bsSize="small">
              <Alert bsStyle="warning" bsSize="small">
                <strong>Injiza ibiharuro waronse muri email!</strong>
              </Alert>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {/* eslint-disable-next-line max-len */}
          <Col xsOffset={1} smOffset={1} mdOffset={1} lgOffset={1} xs={10} sm={10} md={8} lg={8}>
            <FormGroup
              bsSize="small"
              controlId="formInlineCode"
            >
              <FormControl
                type="password"
                value={props.loginCode}
                placeholder="enter code"
                onChange={props.handleLoginCodeChange}
              />
              <FormControl.Feedback />
              <HelpBlock>{props.help}</HelpBlock>
            </FormGroup>{' '}
            <Button type="submit" bsSize="small">Twagiye</Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

CodeForm.propTypes = {
  handleCodeSubmit: PropTypes.func.isRequired,
  handleLoginCodeChange: PropTypes.func.isRequired,
  help: PropTypes.string.isRequired,
  // getCodeValidationState: PropTypes.func.isRequired,
  loginCode: PropTypes.number.isRequired,
  showCodeForm: PropTypes.bool.isRequired,
  // submitButtonText: PropTypes.string.isRequired,
};
export default CodeForm;
