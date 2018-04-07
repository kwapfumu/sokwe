import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Form, FormGroup, Alert, FormControl, Button } from 'react-bootstrap';
import getCurrentUser from '../../../isokoranye/actions/currentUserActionsCreators/currentUserActionsCreators';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: ' ',
    };
  }

  getValidationState() {
    // eslint-disable-next-line prefer-destructuring
    const length = this.state.loginEmail.length;
    // eslint-disable-next-line no-control-regex no-useless-escape
    const emailPattern = new RegExp('/\b[a-z][a-z0-9._-]*@[a-z][a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig');
    if (length > 7 && this.state.loginEmail === emailPattern) {
      return 'success';
    }

    this.setState({ help: `${this.state.loginEmail} is not a valid email address` });
    return 'error';
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ loginEmail: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // const anEmail = ;
    this.props.dispatch(getCurrentUser(this.state.loginEmail));
    if (this.props.getState().currentUser === null) {
      return;
    }
    this.props.setIsLoggedInTrue();
    if (this.props.getState().currentUser.userRole === "admin") {
      this.props.setIsAdminTrue();
    }
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xsOffset={1} smOffset={2} mdOffset={4} lgOffset={4}>
            <Form inline onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup bsSize="small">
                <Alert bsStyle="warning">
                  {/* eslint-disable-next-line max-len */}
                  <strong>Injiza email kugira tukurungikire muri email uruhusha rwo gutangura!</strong>
                </Alert>
              </FormGroup>
              <FormGroup controlId="formInlineEmail">
                <FormControl
                  type="email"
                  placeholder="injiza email"
                  value={this.state.loginEmail}
                  onChange={this.handleChange.bind(this)}
                />
              </FormGroup>{' '}
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Grid>
    );
  }
}
LoginForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  setIsAdminTrue: PropTypes.func.isRequired,
  setIsLoggedInTrue: PropTypes.func.isRequired,
};
export default LoginForm;
