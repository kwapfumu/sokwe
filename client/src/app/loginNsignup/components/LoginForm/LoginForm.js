import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Form, FormGroup, Alert, FormControl, Button } from 'react-bootstrap';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: ' ',
    };
  }

  // getValidationState() {
  // eslint-disable-next-line prefer-destructuring
  // const length = this.state.loginEmail.length;
  // eslint-disable-next-line no-control-regex no-useless-escape
  // const emailPattern =
  // new RegExp('/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig');
  // if (length > 7 && this.state.loginEmail === emailPattern) {
  //  return 'success';
  // }

  // this.setState({ help: `${this.state.loginEmail} is not a valid email address` });
  // return 'error';
  // }
  handleChange(e) {
    this.setState({ loginEmail: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const anEmail = this.state.loginEmail;
    this.props.getCurrentUser(anEmail);
    if (this.props.getState().currentUserReducer.currentUser === null) {
      return;
    }
    this.props.setIsLoggedInTrue();
    if (this.props.getState().currentUserReducer.currentUser.userRole === "admin") {
      this.props.setIsAdminTrue();
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xsOffset={1} smOffset={2} mdOffset={3} lgOffset={3}>
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
              <Row>
                <FormGroup bsSize="small">
                  <Alert bsStyle="warning">
                    {/* eslint-disable-next-line max-len */}
                    <strong>Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!</strong>
                  </Alert>
                </FormGroup>
              </Row>
              <Row>
                <FormGroup controlId="formInlineEmail">
                  <FormControl
                    type="email"
                    placeholder="injiza email"
                    value={this.state.loginEmail}
                    onChange={this.handleChange.bind(this)}
                  />
                </FormGroup>{' '}
                <Button type="submit">Login</Button>
              </Row>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
LoginForm.propTypes = {
  getCurrentUser: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  setIsAdminTrue: PropTypes.func.isRequired,
  setIsLoggedInTrue: PropTypes.func.isRequired,
};
export default LoginForm;
