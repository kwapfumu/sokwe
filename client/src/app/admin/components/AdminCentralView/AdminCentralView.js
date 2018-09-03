import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import adminRoutes from '../../adminRoutes/adminRoutes';

const AdminCentralView = () => (
  <Col xs={8} sm={8} md={8} lg={8} mdOffset={1} className="adminCentralView">
    <h3>this is admin central view</h3>
    { adminRoutes.map((route, id) => (
      <Route
        // eslint-disable-next-line react/no-array-index-key
        key={id}
        path={route.path}
        exact={route.exact}
        // eslint-disable-next-line react/jsx-no-bind
        component={route.main}
      />
    ))}
  </Col>
);

// AdminCentralView.propTypes = {
  // match: PropTypes.shape({
  //   params: PropTypes.object.isRequired,
  //  isExact: PropTypes.bool.isRequired,
  //  path: PropTypes.string.isRequired,
  //  url: PropTypes.string.isRequired,
  // }).isRequired,
// };
export default AdminCentralView;
