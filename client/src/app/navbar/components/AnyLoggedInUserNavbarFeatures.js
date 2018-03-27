import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import Greeting from './Greeting';
import AdminNavbarFeatures from './AdminNavbarFeatures';
import AnyLoggedInUserAfterBrandLinks from './AnyLoggedInUserAfterBrandLinks';

const AnyLoggedInUserNavbarFeatures = (props) => {
  if (props.isAdmin === true && props.showAdminFeatures === true) {
    return (
      <div>
        <Nav bsStyle="pills" activeKey={props.selectedKey}>
          <AnyLoggedInUserAfterBrandLinks />
          <AdminNavbarFeatures />
        </Nav>
        <Greeting currentUserName={props.currentUserName} />
        <Nav pullRight>
          <NavItem eventKey={5}>Logout</NavItem>
        </Nav>
      </div>
    );
  }
  // logged in as regular user
  return (
    <div>
      <Nav bsStyle="pills" activeKey={props.selectedKey}>
        <AnyLoggedInUserAfterBrandLinks />
      </Nav>
      <Greeting currentUserName={props.currentUserName} />
      <Nav pullRight>
        <NavItem eventKey={5}>Logout</NavItem>
      </Nav>
    </div>
  );
};

AnyLoggedInUserNavbarFeatures.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  currentUserName: PropTypes.string.isRequired,
  showAdminFeatures: PropTypes.bool.isRequired,
  selectedKey: PropTypes.number.isRequired,
};
export default AnyLoggedInUserNavbarFeatures;
