import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
// import ErrorBoundary from '../../reusableComponents/ErrorBoundary/ErrorBoundary';
import HomeAfterBrandLinks from './HomeAfterBrandLinks';
import fcbkLogo from '../../../assets/imgs/socialMediaLogos/FB-f-Logo__blue_29.png';

/* rendered inside NavbarSokwe when no one is logged in
* renders : About   fcbLogo and login link */
const HomeNavbarFeatures = (props) => (
  <div id="homeNavbar">
    <Nav bsStyle="pills" activeKey={props.selectedKey}>
      {/* <ErrorBoundary> */}
      <HomeAfterBrandLinks />
      {/* </ErrorBoundary> */}
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={3} href="https://www.facebook.com/Sokwe">
        <img src={fcbkLogo} alt="fcbk logo" />
      </NavItem>
      <LinkContainer to="/login">
        <NavItem eventKey={4}>Login</NavItem>
      </LinkContainer>
    </Nav>
  </div>
);

HomeNavbarFeatures.propTypes = {
  selectedKey: PropTypes.number.isRequired,
};

export default HomeNavbarFeatures;
