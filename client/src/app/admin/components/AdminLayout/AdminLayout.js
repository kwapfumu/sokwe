import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

const AdminLayout = () => {
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
};

// AdminLayout.propTypes = {};
export default AdminLayout;
