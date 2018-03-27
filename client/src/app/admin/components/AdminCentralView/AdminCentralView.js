import React from 'react';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import adminRoutes from '../../adminRoutes/adminRoutes';

const AdminCentralView = () => (
  <Col xs={9} sm={9} md={9} lg={9} className="adminCentralView">
    {/* React Router will automatically set the children props to whichever is
      the appropriate component basednon the current route
    {React.cloneElement(props.children, props)} */}
    <h3>this is admin central view</h3>
    {adminRoutes.map((route, id) => (
      // eslint-disable-next-line react/no-array-index-key
      <Route key={id} path={route.path} exact={route.exact} component={route.main} />
    ))}
  </Col>
);

// AdminCentralView.propTypes = {
  // children: PropTypes.element.isRequired,
// };
export default AdminCentralView;
