import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Button, FormControl, HelpBlock } from 'react-bootstrap';


class AddIgisokozoFormReactBootstrap extends Component {
	getInitialState() {
		return {
			value: ''
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}


	FieldGroup(id,label,help,{...props}){
		return (
			<FormGroup controlId={id} validationState={this.getValidationState()}>
				<FormControl
					type="text"
					placeholder={label}
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<FormControl.Feedback />
				<HelpBlock>{help}</HelpBlock>
			</FormGroup>
		);
	}

	render(){
		return (
			<Form inline onSubmit={this.props.handleSubmit}>
			<Row>
				<Col md={5}>
					<FieldGroup id="formInlineigisokozo" label="igisokozo" help={} />
				</Col>
				{' '}
				<Col smOffset={1} md={5}>
					<FieldGroup id="formInlineinyishu" label="inyishu" help={} />
				</Col>
			</Row>
			{/*ongeramwoButtonRow*/}
			<Row id="ongeramwoButton" style="padding-top:10px;">
				<Col mdOffset={4} md={1}>
					<Button type="submit" bsStyle="primary">Ongeramwo</Button>
				</Col>
			</Row>
		</Form>
		);
	};
};

AddIgisokozoFormReactBootstrap.propTypes={
	handleSubmit: PropTypes.func.isRequired,
};

export default AddIgisokozoFormReactBootstrap;
