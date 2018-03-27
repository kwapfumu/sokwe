import React from 'react';
// import PropTypes from 'prop-types';
import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import HomeAfterBrandLinks from './HomeAfterBrandLinks';


const AnyLoggedInUserAfterBrandLinks = () => (
  <div>
    <HomeAfterBrandLinks />
    <LinkContainer to="/isokoranye">
      <NavItem eventKey={2}>Isokoranye</NavItem>
    </LinkContainer>
  </div>

);
// HomeAfterBrandLinks.propTypes = {
  // selectedKey: PropTypes.number.isRequired,
// };

export default AnyLoggedInUserAfterBrandLinks;
