import React from 'react';
// import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const AdminLeftSideNavigation = () => (
  <Nav
    bsStyle="pills"
    stacked
    justified
    pullLeft
    activeKey={2}
    // onSelect={this.handleSelect.bind(this)}
  >
    <LinkContainer to="/users">
      <NavItem eventKey={1}>Users</NavItem>
    </LinkContainer>
    <LinkContainer to="/ibisokozo">
      <NavItem eventKey={2}>Ibisokozo</NavItem>
    </LinkContainer>
    {/* <NavItem eventKey={3} onClick={this.props.openAdminAddSokozoForm.bind(this)} >
    Add Igisokozo
  </NavItem> */}
  </Nav>
);

// AdminLeftSideNavigation.propTypes = {};
export default AdminLeftSideNavigation;
