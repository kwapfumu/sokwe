import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Well, Button } from 'react-bootstrap';
// import ErrorBoundary from '../../../reusableComponents/ErrorBoundary/ErrorBoundary';
import StartMsg from './StartMsg';
import SokweMsg from './SokweMsg';
import IgisokozoDisplay from './IgisokozoDisplay';
import InyishuDisplay from './InyishuDisplay';

class NiruzeDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showStartMsg: false,
      showSokweMsg: false,
      // showNiruzeMsg: false,
    };
  }

  componentDidMount() {
    this.setState({ showStartMsg: true });
  }

  handleTanguraClick(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ showStartMsg: false });
    this.setState({ showSokweMsg: true });
  }

  handleNiruzeClick(e) {
    e.preventDefault();
    e.stopPropagation();
    // sets displayIgisokozo:true
    this.props.showIgisokozo();
  }

  render() {
    return (
      <Row>
        {/* SokweDisplayWell */}
        <Row>
          <Col mdOffset={1} lgOffset={1}>
            <Well className="isokoranyeGrayTheme">
              {/* <ErrorBoundary> */}
              <StartMsg
                startMsg="Amakuru? Tangura sha..."
                showStartMsg={this.state.showStartMsg}
              />
              {/* </ErrorBoundary> */}
              {/* <ErrorBoundary> */}
              <SokweMsg
                sokweMsg="Sokwe?"
                showSokweMsg={this.state.showSokweMsg}
              />
              {/* </ErrorBoundary> */}
              {/* <NiruzeMsg niruzeMsg="Niruze!"
              showNiruzeMsg={this.state.showNiruzeMsg}/> */}
              {/* <ErrorBoundary> */}
              <IgisokozoDisplay
                igisokozo={this.props.aSokozo.igisokozo}
                displayIgisokozo={this.props.displayIgisokozo}
              />
              {/* </ErrorBoundary> */}
              {/* <ErrorBoundary> */}
              <InyishuDisplay
                inyishu={this.props.aSokozo.inyishu}
                displayInyishu={this.props.displayInyishu}
              />
              {/* </ErrorBoundary> */}
            </Well>
          </Col>
        </Row>
        {/* /SokweDisplayWell */}
        {/* sokweButtonRow */}
        <Row className="niruzeButtons">
          <Col mdOffset={2} md={1}>
            <p>
              <Button
                bsStyle="primary"
                bsSize="small"
                disabled={this.state.isLoading}
                onClick={!this.state.isLoading ? this.handleTanguraClick.bind(this) : null}
              >
                {this.state.isLoading ? 'Loading' : 'Tangura'}
              </Button>
            </p>
          </Col>
          <Col mdOffset={2} md={1}>
            <p>
              <Button
                bsStyle="primary"
                bsSize="small"
                disabled={this.state.isLoading}
                onClick={!this.state.isLoading ? this.handleNiruzeClick.bind(this) : null}
              >
                {this.state.isLoading ? 'Loading' : 'Niruze'}
              </Button>
            </p>
          </Col>
        </Row>
        {/* /sokweButtonRow */}
      </Row>
    );
  }
}

NiruzeDisplay.propTypes = {
  aSokozo: PropTypes.object.isRequired,
  displayIgisokozo: PropTypes.bool.isRequired,
  displayInyishu: PropTypes.bool.isRequired,
  showIgisokozo: PropTypes.func.isRequired,
};
export default NiruzeDisplay;
