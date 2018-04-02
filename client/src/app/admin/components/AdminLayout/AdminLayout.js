import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

class AdminLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.dispatch(fetchIbisokozoActionsCreators.fetchIbisokozo());
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={2} sm={2} md={2} lg={2} className="adminLeftSideNavigation">
            <AdminLeftSideNavigation />
          </Col>
          <Col xs={8} sm={8} md={8} lg={8}mdOffset={1}>
            <AdminCentralView />
          </Col>
        </Row>
      </Grid>
    );
  }
}

// AdminLayout.propTypes = {};
export default AdminLayout;
