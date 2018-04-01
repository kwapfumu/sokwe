import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import addIgisokozoActionsCreators from '../../actions/igisokozoActionsCreators/addIgisokozoActionsCreators';
import DisplayIgisokozoForm from '../DisplayIgisokozoForm/DisplayIgisokozoForm';


class OngeramwoRow extends Component {
	constructor(props) {
		super(props);
	}
	/* @params json data passed by AddIgisokozoForm */
	submit(values) {
		e.preventDefault();
		this.props.dispatch(addIgisokozoActionsCreators.addIgisokozo(values));
		e.stopPropagation();
	}

	handleTwongereClick(e) {
		e.preventDefault();
		this.props.toggleShowAddIgisokozoForm();
		//e.stopPropagation()
	}

	render() {
		return (
			{/* ongeramwoRow */}
			<Row>
				<Row style="padding-top:10px;" className="niruzeButtons">
					<Col mdOffset={3} lgOffset={3} md={4} lg={4}>
						<Button
              bsStyle="info"
              id="twongere"
              bsSize="small"
              onClick={this.handleTwongereClick.bind(this)}
						>
							Twunguze ibisokozo
						</Button>
					</Col>
				</Row>
				{/* addIgiSokozoForm */}
				<Row id="addIgiSokozoForm" style="padding-top:10px;" className="niruzeButtons">
					<DisplayIgisokozoForm
						showAddIgisokozoForm={this.props.showAddIgisokozoForm}
						submit={this.submit.bind(this)}
					/>
				</Row>
				{/* /addIgiSokozoForm*/}
			</Row>
			{/* /ongeramwoRow*/}
		);
	};
};
OngeramwoRow.propTypes={
	showAddIgisokozoForm:PropTypes.bool.isRequired,
	toggleShowAddIgisokozoForm:PropTypes.func.isRequired,
};
export default OngeramwoRow;
