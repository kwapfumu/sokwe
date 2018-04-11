import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button } from 'react-bootstrap';
import addIgisokozo from '../../actions/igisokozoActionsCreators/addIgisokozoActionsCreators';
import DisplayIgisokozoForm from '../DisplayIgisokozoForm/DisplayIgisokozoForm';


class OngeramwoRow extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  // @params json data passed by AddIgisokozoForm
  submit(e, values) {
    e.preventDefault();
    this.props.dispatch(addIgisokozo(values));
    e.stopPropagation();
  }

  handleTwongereClick(e) {
    e.preventDefault();
    this.props.toggleShowAddIgisokozoForm();
    // e.stopPropagation();
  }

  render() {
    return (
      <Row>
        <Row className="niruzeButtons">
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
        <Row id="addIgiSokozoForm" className="niruzeButtons">
          <DisplayIgisokozoForm
            showAddIgisokozoForm={this.props.showAddIgisokozoForm}
            submit={this.submit.bind(this)}
          />
        </Row>
      </Row>
    );
  }
}

OngeramwoRow.propTypes = {
  dispatch: PropTypes.func.isRequired,
  showAddIgisokozoForm: PropTypes.bool.isRequired,
  toggleShowAddIgisokozoForm: PropTypes.func.isRequired,
};

export default OngeramwoRow;
