import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AdminLeftSideNavigation extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  handleSelect(e, eventKey) {
    e.preventDefault();
    switch (eventKey) {
    case 1: // react router renders //admin/users
      this.props.history.push('/admin/users');
      break;
    case 2: // react router renders //admin/users
      this.props.history.push('/admin/ibisokozo');
      break;
    default:
      this.props.history.goBack();
      break;
    }
  }

  render() {
    return (
      <Nav
        bsStyle="pills"
        stacked
        justified
        pullLeft
        activeKey={2}
        onSelect={this.handleSelect.bind(this)}
      >
        <LinkContainer to="/admin/users">
          <NavItem eventKey={1}>Users</NavItem>
        </LinkContainer>
        <LinkContainer to="/admin/ibisokozo">
          <NavItem eventKey={2}>Ibisokozo</NavItem>
        </LinkContainer>
        {/* <NavItem eventKey={3} onClick={this.props.openAdminAddSokozoForm.bind(this)} >
        Add Igisokozo
      </NavItem> */}
      </Nav>
    );
  }
}

AdminLeftSideNavigation.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};
export default AdminLeftSideNavigation;
