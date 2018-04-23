import React from 'react';
// import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const HomeAfterBrandLinks = () => (
  <div>
    <LinkContainer to="/about">
      <NavItem eventKey={1}>About</NavItem>
    </LinkContainer>
    <LinkContainer to="/valentina">
      <NavItem eventKey={8}>Valentina</NavItem>
    </LinkContainer>
  </div>
);

export default HomeAfterBrandLinks;
