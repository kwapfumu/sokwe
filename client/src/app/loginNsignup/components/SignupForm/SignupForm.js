import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import EmailFormModal from '../EmailFormModal/EmailFormModal';


/**hold the draft card state, render the CardForm, and provide it with callbacks to manipulate that state and persist the new/edited card.*/
class SignupForm extends Component {
	constructor(props) {
		super(props);
	}
//sets the property:value of draftCard according to each field's user input
	handleChange(field, value) {
		this.props.dispatch(draftTaskActionsCreators.updateDraftTaskActionCreator(field,value));
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.dispatch(addTaskActionsCreator(this.props.getState().draftTask));
		this.props.history.pushState(null,'/isokoranye');
	}
	/**When the component mounts, it sets the component state to an empty draft task with some default values and a temporary ID
	(based on the current date). The values of this draft task will be presented in the AdminTaskForm, and for every change you update
	the state.*/
	componentDidMount() {
		setTimeout(()=>{this.props.dispatch(draftTaskActionsCreators.createDraftTaskActionCreator())}, 0);
	}

	render() {
		return (
			<EmailFormModal modalTitle="Signup"
			                emailFormButtonText="Signup"
								handleChange={this.props.handleChange}
								handleSubmit={this.props.handleSubmit}/>
		);
	}
};

SignupForm.propTypes = {
	 dispatch: PropTypes.func.isRequired,
	 getState: PropTypes.func.isRequired,
	 handleChange: PropTypes.func.isRequired,
	 handleSubmit: PropTypes.func.isRequired,
};

export default SignupForm;
