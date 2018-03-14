import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeNavbarFeatures = (props) => (
  <div id="homeNavbar">
    <Nav bsStyle="pills" activeKey={props.selectedKey}>
      <LinkContainer to="/about">
        <NavItem eventKey={1}>About</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={3} href="https://www.facebook.com/Sokwe">
        <img src="../../../assets/imgs/socialMediaLogos/FB-f-Logo__blue_29.png" alt="fcbk logo" />
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
