import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Sokoranya from '../Sokoranya/Sokoranya';
import StatsNuserScore from '../StatsNuserScore/StatsNuserScore';
import fetchIbisokozoActionsCreators from '../../actions/ibisokozoActionsCreators/fetchIbisokozoActionsCreators';

class IsokoranyeLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddIgisokozoForm: false,
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchIbisokozoActionsCreators.fetchIbisokozo());
  }

  toggleShowAddIgisokozoForm() {
    this.setState({ showAddIgisokozoForm: !showAddIgisokozoForm });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={2} lgOffset={2} xs={6} sm={6} md={6} lg={6}>
            <Sokoranya
              showAddIgisokozoForm={this.state.showAddIgisokozoForm}
              toggleShowAddIgisokozoForm={this.toggleShowAddIgisokozoForm.bind(this)}
              aSokozo={this.props.aSokozo}
              ibisokozo={this.props.ibisokozo}
            />
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} id="sidebar" className="sidebar-offCanvas">
            <StatsNuserScore
              toggleShowAddIgisokozoForm={this.toggleShowAddIgisokozoForm.bind(this)}
              username={this.props.currentUser.username}
              thisGameScore={this.props.thisGameScore}
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}

IsokoranyeLayout.propTypes = {
  aSokozo:PropTypes.object.isRequired,
  currentUser:PropTypes.object.isRequired,
  dispatch:PropTypes.func.isRequired,
  ibisokozo: PropTypes.object.isRequired,
  thisGameScore:PropTypes.number.isRequired,
};

export default IsokoranyeLayout;
