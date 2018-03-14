import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default function AdminNavbarFeatures (props) {
  return (
    <div>
      <LinkContainer to="/ibisokozo">
        <NavItem eventKey={3}>Ibisokozo</NavItem>
      </LinkContainer>
      <LinkContainer to="/users">
        <NavItem eventKey={4}>Users</NavItem>
      </LinkContainer>
    <div>
  );
};
