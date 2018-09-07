import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
// import ErrorBoundary from '../../../reusableComponents/ErrorBoundary/ErrorBoundary';
import AdminLeftSideNavigation from '../AdminLeftSideNavigation/AdminLeftSideNavigation';
import AdminCentralView from '../AdminCentralView/AdminCentralView';

const AdminLayout = () => (
  <Grid>
    <Row>
      {/* <ErrorBoundary> */}
      <AdminLeftSideNavigation />
      {/* </ErrorBoundary> */}
      {/* <ErrorBoundary> */}
      <AdminCentralView />
      {/* </ErrorBoundary> */}
    </Row>
  </Grid>
);

// AdminLayout.propTypes = {};
export default AdminLayout;
