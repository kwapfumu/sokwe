import React, { Component, PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Greeting from './Greeting';
import AdminNavbarFeatures from './AdminNavbarFeatures';

const AnyLoggedInUserNavbarFeatures = (props) => {
  if(props.showAdminFeatures) {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={props.selectedKey}>
          <LinkContainer to="/about">
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/isokoranye">
            <NavItem eventKey={2}>Isokoranye</NavItem>
          </LinkContainer>
          <AdminNavbarFeatures />
        </Nav>
        <Greeting currentUserName={props.currentUserName} />
        <Nav pullRight>
          <NavItem eventKey={5}>Logout</NavItem>
        </Nav>
      <div>
    );
  } else {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={props.selectedKey}>
          <LinkContainer to="/about">
            <NavItem eventKey={1}>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/isokoranye">
            <NavItem eventKey={2}>Isokoranye</NavItem>
          </LinkContainer>
        </Nav>
        <Greeting currentUserName={props.currentUserName} />
        <Nav pullRight>
          <NavItem eventKey={5}>Logout</NavItem>
        </Nav>
      </div>
    );
  }
};

AnyLoggedInUserNavbarFeatures.propTypes = {
  currentUserName: PropTypes.string.isRequired,
  showAdminFeatures: PropTypes.bool.isRequired,
  selectedKey: PropTypes.number.isRequired,
};

export default AnyLoggedInUserNavbarFeatures;
