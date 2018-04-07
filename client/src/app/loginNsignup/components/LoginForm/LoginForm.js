import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import getCurrentUser from '../../../isokoranye/actions/currentUserActionsCreators/currentUserActionsCreators';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: ' ',
    };
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
