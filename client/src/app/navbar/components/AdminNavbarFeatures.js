import React, { Component, PropTypes } from 'react';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const AdminNavbarFeatures = (props) => (
  <div>
	  <LinkContainer to="/ibisokozo">
		  <NavItem eventKey={3}>Ibisokozo</NavItem>
	  </LinkContainer>
	  <LinkContainer to="/users">
		  <NavItem eventKey={4}>Users</NavItem>
	  </LinkContainer>
  <div>
);

// AdminNavbarFeatures.propTypes = {};
export default AdminNavbarFeatures;
