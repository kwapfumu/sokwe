import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AdminLeftSideNavigation extends Component {
  handleSelect(e,eventKey) {
    e.preventdefault();
  }

  render() {
    return (
      <div>
        {/* might need to remove the onselect, might work without it with react-router_bootstrap */}
        <Nav
          bsStyle="pills"
          stacked
          justified
          pullLeft
          activeKey={2}
          onSelect={this.handleSelect.bind(this)}
        >
          <LinkContainer to="/users">
            <NavItem eventKey={1}>Users</NavItem>
          </LinkContainer>
          <LinkContainer to="/ibisokozo">
            <NavItem eventKey={2}>Ibisokozo</NavItem>
          </LinkContainer>
          <NavItem
            eventKey={3}
            onClick={this.openAdminAddSokozoForm.bind(this)}
          >
            Add Igisokozo
          </NavItem>
        </Nav>
      </div>
    );
  }
}

AdminLeftSideNavigation.propTypes = {};
export default AdminLeftSideNavigation;
