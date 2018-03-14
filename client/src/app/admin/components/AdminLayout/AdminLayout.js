import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

class AdminLayout extends Component {
  constructor(props) {
    super(props);
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

AdminLayout.propTypes = {};
export default AdminLayout;
