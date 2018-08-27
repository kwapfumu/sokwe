import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import ErrorBoundary from '../../../reusableComponents/ErrorBoundary/ErrorBoundary';
import Sokoranya from '../../../isokoranye/components/Sokoranya/Sokoranya';

// eslint-disable-next-line
class IsokoranyeLayout extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
    this.state = {
      showAddIgisokozoForm: false,
    };
  }

  toggleShowAddIgisokozoForm() {
    this.setState({ showAddIgisokozoForm: !this.state.showAddIgisokozoForm });
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col mdOffset={2} lgOffset={2} xs={6} sm={6} md={6} lg={6}>
            <ErrorBoundary>
              <Sokoranya
                showAddIgisokozoForm={this.state.showAddIgisokozoForm}
                toggleShowAddIgisokozoForm={this.toggleShowAddIgisokozoForm.bind(this)}
                aSokozo={this.props.aSokozo}
                ibisokozo={this.props.ibisokozo}
              />
            </ErrorBoundary>
          </Col>
          <Col xs={6} sm={3} md={3} lg={3} id="sidebar" className="sidebar-offCanvas"><h3>This is wtv page</h3></Col>
        </Row>
      </Grid>
    );
  }
}

IsokoranyeLayout.propTypes = {
  aSokozo: PropTypes.object.isRequired,
  ibisokozo: PropTypes.object.isRequired,
};
export default IsokoranyeLayout;
