import React from 'react';
// import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const HomeAfterBrandLinks = () => (
  <LinkContainer to="/about">
    <NavItem eventKey={1}>About</NavItem>
  </LinkContainer>
);

export default HomeAfterBrandLinks;
