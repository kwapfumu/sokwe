import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

const AdminCentralView = (props) => (
  <Col xs={9} sm={9} md={9} lg={9} className="adminCentralView">
    {/* React Router will automatically set the children props to whichever is
      the appropriate component basednon the current route */}
    {React.cloneElement(props.children, props)}
  </Col>
);

AdminCentralView.propTypes = {};
export default AdminCentralView;
