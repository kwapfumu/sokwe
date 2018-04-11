import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Well, Button } from 'react-bootstrap';
import incrementUserScore from '../../actions/currentUserActionsCreators/incrementUserScoreActionsCreators';

class NiruzeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNyishu: '',
      feedbackText: '',
      isVerifying: false,
    };
    // this.handleHinyuzaClick=this.handleHinyuzaClick.bind(this);
  }
  // returns inyishu from currently played aSokozo
  getInyishu() {
    const aNyishu = this.props.getState().aSokozo.inyishu;
    return aNyishu;
  }
  // if true inc userscore else reset usernyishu to empty string
  hinyuza(akaNyishu) {
    const nyish = this.getInyishu();
    if (nyish === akaNyishu) {
      this.props.dispatch(incrementUserScore());
      this.setState({ userNyishu: '', feedbackText: 'aho kiyago!' });
      this.props.resetIgisokozoDisplay();
    }

    this.setState({ feedbackText: 'ituuuye!' });
    this.setState({ userNyishu: '' });
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ userNyishu: e.target.value });
  }

  handleHinyuzaClick(e) {
    e.preventDefault();
    this.setState({ isVerifying: true });
    this.hinyuza(this.state.userNyishu);
    this.setState({ isVerifying: false });
  }

  handleNdaguhayeClick(e) {
    e.preventDefault();
    this.props.showInyishu();
  }

  render() {
    return (
      <Row id="inputRow">
        <Col id="hinyuzaForm">
          <Row>
            <p>
              <input
                type="text"
                id="inyishu"
                name="inyishu"
                placeholder="inyishu"
                className="input-xlarge col-sm-offset-2 col-md-6 isokoranyeGrayTheme"
                onChange={this.handleChange.bind(this)}
              />
            </p>
          </Row>
          {/* FeedbackRow */}
          <Row>
            <Well>{this.state.feedbackText}</Well>
          </Row>
          {/* /FeedbackRow */}
          {/* hinyuzarowButtons */}
          <Row id="hinyuzaButtonRow" className="niruzeButtons">
            <Col mdOffset={2} md={1}>
              <p>
                <Button
                  bsStyle="primary"
                  id="hinyuzaButton"
                  bsSize="small"
                  disabled={this.state.isVerifying}
                  onClick={this.handleHinyuzaClick.bind(this)}
                >
                 Hinyuza
                </Button>
              </p>
            </Col>
            <Col mdOffset={2} md={1}>
              <p>
                <Button
                  bsStyle="primary"
                  id="ndaguhayeButton"
                  bsSize="small"
                  onClick={this.handleNdaguhayeClick.bind(this)}
                >
                  Ndaguhaye
                </Button>
              </p>
            </Col>
          </Row>
          {/* /hinyuzarowButtons */}
        </Col>
      </Row>
    );
  }
}

NiruzeInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  resetIgisokozoDisplay: PropTypes.func.isRequired,
  showInyishu: PropTypes.func.isRequired,
};

export default NiruzeInput;
