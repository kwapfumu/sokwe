import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row, Col, Form, FormGroup, Alert, FormControl, Button } from 'react-bootstrap';
import { sendEmail, login } from '../../coolReusableFunctions/auth0/passwordless/auth0Fctr';
import CodeForm from '../CodeForm/CodeForm';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginCode: null,
      loginEmail: null,
      showCodeForm: false,
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
  // custom propValidator:todo=> refactor it when u less tired...
  getCodeValidationState() {
    if (typeof this.state.loginCode !== 'number' || this.state.loginCode !== null) {
      this.setState({ help: 'invalid code' });
      return 'error';
    }
    if (this.state.loginCode.length !== 6) {
      this.setState({ help: 'code should be a 6 digit code' });
      return 'error';
    }
    return 'success';
  }

  handleEmailChange(e) {
    this.setState({ loginEmail: e.target.value });
  }

  handleLoginCodeChange(e) {
    this.setState({ loginCode: e.target.value });
  }

  handleEmailSubmit(e) {
    e.preventDefault();
    sendEmail(this.state.loginEmail);
    this.setState({ showCodeForm: true });
  }

  handleCodeSubmit(e) {
    e.preventDefault();
    login(this.state.loginCode);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xsOffset={1} smOffset={2} mdOffset={3} lgOffset={3}>
            <Form inline onSubmit={this.handleEmailSubmit.bind(this)}>
              <Row>
                <FormGroup bsSize="small">
                  <Alert bsStyle="warning">
                    {/* eslint-disable-next-line max-len */}
                    <strong>Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!</strong>
                  </Alert>
                </FormGroup>
              </Row>
              {/* email form row */}
              <Row>
                <FormGroup controlId="formInlineEmail">
                  <FormControl
                    type="email"
                    placeholder="injiza email"
                    value={this.state.loginEmail}
                    onChange={this.handleEmailChange.bind(this)}
                  />
                </FormGroup>{' '}
                <Button type="submit" bsSize="small">Ndungikira</Button>
              </Row>
              {/* code form row */}
              <CodeForm
                handleCodeSubmit={this.handleCodeSubmit.bind(this)}
                handleLoginCodeChange={this.handleLoginCodeChange.bind(this)}
                help={this.state.help}
                getCodeValidationState={this.getCodeValidationState.bind(this)}
                loginCode={this.state.loginCode}
                showCodeForm={this.state.showCodeForm}
              />
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
LoginForm.propTypes = {};

export default LoginForm;
