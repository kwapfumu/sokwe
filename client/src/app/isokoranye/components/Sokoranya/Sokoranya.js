import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
// import ErrorBoundary from '../../../reusableComponents/ErrorBoundary/ErrorBoundary';
import NiruzeDisplay from '../NiruzeDisplay/NiruzeDisplay';
import NiruzeInput from '../NiruzeInput/NiruzeInput';
import OngeramwoRow from '../OngeramwoRow/OngeramwoRow';

class Sokoranya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayIgisokozo: false,
      displayInyishu: false,
    };
  }

  toggleShowIgisokozoDisplay() {
    this.setState({ displayIgisokozo: !this.state.displayIgisokozo });
  }

  showInyishu() {
    this.setState({ displayInyishu: true });
  }

  render() {
    return (
      <Row className="akogusokoranya">
        {/* <ErrorBoundary> */}
        <NiruzeDisplay
          aSokozo={this.props.aSokozo}
          displayIgisokozo={this.state.displayIgisokozo}
          displayInyishu={this.state.displayInyishu}
          showIgisokozo={this.toggleShowIgisokozoDisplay.bind(this)}
        />
        {/* </ErrorBoundary> */}
        {/* <ErrorBoundary> */}
        <NiruzeInput
          resetIgisokozoDisplay={this.toggleShowIgisokozoDisplay.bind(this)}
          showInyishu={this.showInyishu.bind(this)}
        />
        {/* </ErrorBoundary> */}
        <Row>
          {/* <ErrorBoundary> */}
          <OngeramwoRow
            className="ongeramwoRow"
            showAddIgisokozoForm={this.props.showAddIgisokozoForm}
            toggleShowAddIgisokozoForm={this.props.toggleShowAddIgisokozoForm}
          />
          {/* </ErrorBoundary> */}
        </Row>
      </Row>
    );
  }
}

Sokoranya.propTypes = {
  // getState:PropTypes.func.isRequired,
  aSokozo: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    igisokozo: PropTypes.string.isRequired,
    inyishu: PropTypes.string.isRequired,
  }).isRequired,
  showAddIgisokozoForm: PropTypes.bool.isRequired,
  toggleShowAddIgisokozoForm: PropTypes.func.isRequired,
};
export default Sokoranya;
