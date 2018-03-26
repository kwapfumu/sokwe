import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Modal, Button } from 'react-bootstrap';
import ModalBody2Render from '../ModalBody2Render/ModalBody2Render';
// import auth0Fctr from '../../coolReusableFunctions/auth0/passwordless/auth0Fctr';

class EmailFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEmailForm: true,
      showCodeForm: false,
    };
  }

  // const myAuth0 = auth0Fctr();
  componentDidMount() {}

  handleEmailSubmit(e, anEmail) {
    e.preventDefault();
    // sends an email with login code to the provided email address
    // myAuth0.sendEmail(anEmail);
    // hide Email form and show CodeForm
    this.setState({ showEmailForm: false });
    this.setState({ showCodeForm: true });
  }

  // eslint-disable-next-line
  handleCodeSubmit(e, aCode) {
    e.preventDefault();
  // myAuth0.login(aCode);
  }

  // handles the modal closing (when the user clicks outside the modal)
  handleClose() {
    this.props.history.pushState(null,'/');
  }


	/* not needed 4 this login type or change it later
	* const ErrorMsg = function ErrorMsg(){
	*	if(err.status === 404){
	*		return (
	*			<Alert bsStyle="warning">
	*				<strong>Ntubaho subira canke <LinkContainer to="signup">wiyandikishe!</LinkContainer></strong>
	*			</Alert>
	*		);
	*	} else {
	*		return null;
	*	};
	* }, */

  render() {
    return (
      <section>
        <Col xs={8} sm={8} md={8} lg={8}>
          <div className="static-modal">
            <Modal.Dialog show={this.props.showModal} onHide={this.props.closeEmailFormModal}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.modalTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* {ErrorMsg} */}
                <ModalBody2Render
                  showCodeForm={this.state.showCodeForm}
                  showEmailForm={this.state.showEmailForm}
                  handleEmailSubmit={this.handleEmailSubmit.bind(this)}
                  handleCodeSubmit={this.handleCodeSubmit.bind(this)}
                  handleClose={this.handleClose.bind(this)}
                />
              </Modal.Body>
              <Modal.Footer>
                <Button
                  type="button"
                  bsStyle="default"
                  bsSize="small"
                  onClick={this.props.closeEmailFormModal}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  bsStyle="warning"
                  bsSize="small"
                  onClick={this.props.handleSubmit.bind(this)}
                >
                  {this.props.emailFormButtonText}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </Col>
      </section>
    );
  }
}

EmailFormModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
  closeEmailFormModal: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  emailFormButtonText: PropTypes.string.isRequired,
};

export default EmailFormModal;
