import React from 'react';
// import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const AdminNavbarFeatures = () => {
  return (
    <div>
      <LinkContainer to="/ibisokozo">
        <NavItem eventKey={3}>Ibisokozo</NavItem>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavItem eventKey={4}>Users</NavItem>
      </LinkContainer>
    </div>
  );
};

export default AdminNavbarFeatures;
