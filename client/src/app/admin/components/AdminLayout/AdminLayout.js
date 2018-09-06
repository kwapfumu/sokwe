import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

const AdminLayout = () => (
  <Grid>
    <Row>
      <AdminLeftSideNavigation />
      <AdminCentralView />
    </Row>
  </Grid>
);

// AdminLayout.propTypes = {};
export default AdminLayout;
