import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import NavbarFeatures2Render from './NavbarFeatures2Render';
// import auth0Fctr from '../../coolReusableFunctions/auth0/auth0Fctr';

class NavbarSokwe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedKey: 0,
    };
  }

  handleSelect(eventKey) {
    eventKey.preventDefault();
    switch (eventKey) {
    case 1: // react router handles redirecting to /about
      this.setState({ selectedKey: eventKey });
      break;
    case 2: // react router handles redirecting to /isokoranye
      this.setState({ selectedKey: eventKey });
      break;
    case 3: // react router handles redirecting to fcbk
      this.setState({ selectedKey: eventKey });
      break;
    case 4: // react router handles redirecting to /login
      this.setState({ selectedKey: eventKey });
      this.props.history.push('/login');
      break;
    case 5:
    // auth0Fctr.logout();
    // not sure if necessary cannot know as i cannot test
    // this.props.history.pushState(null,'/');
      break;
    case 6: // react router handles redirecting to /logout
      this.setState({ selectedKey: eventKey });
      break;
    case 7: // react router handles redirecting to /logout
      this.setState({ selectedKey: eventKey });
      break;
    default:
      break;
    }
  }

  render() {
    return (
      <Navbar staticTop collapseOnSelect>
        <Navbar.Header>
          <IndexLinkContainer to="/">
            <Navbar.Brand>Sokwe</Navbar.Brand>
          </IndexLinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse onSelect={this.handleSelect.bind(this)}>
          <NavbarFeatures2Render
            isAdmin={this.props.isAdmin}
            isLoggedIn={this.props.isLoggedIn}
            getState={this.props.getState}
            showAdminFeatures={this.props.showAdminFeatures}
            selectedKey={this.state.selectedKey}
          />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

NavbarSokwe.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getState: PropTypes.func.isRequired,
  showAdminFeatures: PropTypes.bool.isRequired,
};

export default NavbarSokwe;
