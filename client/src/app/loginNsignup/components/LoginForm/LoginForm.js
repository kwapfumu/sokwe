// import React, { Component } from 'react';
// import { Grid, Row, Col, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
// import loginByEmail from '../../coolReusableFunctions/customLogin/loginByEmail';
// import PropTypes from 'prop-types';
// import EmailFormModal from '../EmailFormModal/EmailFormModal';

// componentDidMount() {
//  this.setState({ showModal: true });
// }

// closeEmailFormModal() {
// this.setState({ showModal: false });
// change the url without reloading
// this.props.history.push('/');
// }

// render() {
//  return (
//       {/* <EmailFormModal
//        modalTitle="Login"
//        emailFormButtonText="Login"
//        showModal={this.state.showModal}
//        closeEmailFormModal={this.closeEmailFormModal.bind(this)}
//      /> */}
// class LoginForm extends Component {
//  constructor(props){
//    super(props);
//  }
//  handleSubmit(e) {
//   e.preventDefault();
//   loginByEmail(anEmail);
//  }
//  render() {
//    return (
//      <Grid>
//        <Row>
//          <Col xsOffset={1} smOffset={2} mdOffset={4} lgOffset={4}>
//            <Form inline onSubmit={this.handleSubmit.bind(this)}>
//              <FormGroup controlId="formInlineEmail">
//                <FormControl type="email" placeholder="injiza email" />
//              </FormGroup>{' '}
//              <Button type="submit">Login</Button>
//            </Form>
//          </Col>
//        </Row>
//      </Grid>
//    );
//  }
// };


// LoginForm.propTypes = {};

// export default LoginForm;
