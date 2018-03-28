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
          <Col xs={3} sm={3} md={3} lg={3} className="adminLeftSideNavigation">
            <AdminLeftSideNavigation />
          </Col>
          <AdminCentralView />
        </Row>
      </Grid>
    );
  }
}

// AdminLayout.propTypes = {};
export default AdminLayout;
