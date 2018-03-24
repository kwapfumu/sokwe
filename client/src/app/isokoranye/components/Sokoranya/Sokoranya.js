import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import NiruzeDisplay from '../NiruzeDisplay/NiruzeDisplay';
import NiruzeInput from '../NiruzeInput/NiruzeInput';
import OngeramwoRow from '../OngeramwoRow/OngeramwoRow';

class Sokoranya extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayIgisokozo:false,
			displayInyishu:false,
		};
	}

	toggleShowIgisokozoDisplay() {
		this.setState({ displayIgisokozo: !displayIgisokozo });
	}

	showInyishu() {
		this.setState({ displayInyishu: true });
	}

	render() {
    return (
      {/* sokoranya row */}
      <Row className="akogusokoranya">
				<NiruzeDisplay
          aSokozo={this.props.aSokozo}
          displayIgisokozo={this.state.displayIgisokozo}
          displayInyishu={this.state.displayInyishu}
          showIgisokozo={this.toggleShowIgisokozoDisplay.bind(this)}
        />
				<NiruzeInput
          resetIgisokozoDisplay={this.toggleShowIgisokozoDisplay.bind(this)}
          showInyishu={this.showInyishu.bind(this)}
        />
				<OngeramwoRow
          className="ongeramwoRow"
          showAddIgisokozoForm={this.props.showAddIgisokozoForm}
          toggleShowAddIgisokozoForm={this.props.toggleShowAddIgisokozoForm}
        />
			</Row>
			{/* /sokoranya row*/}
		);
	};
};

Sokoranya.propTypes = {
	// getState:PropTypes.func.isRequired,
	aSokozo:PropTypes.object.isRequired,
	showAddIgisokozoForm:PropTypes.bool.isRequired,
	toggleShowAddIgisokozoForm:PropTypes.func.isRequired,
};
export default Sokoranya;
