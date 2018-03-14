import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import AnyLoggedInUserNavbarFeatures from './AnyLoggedInUserNavbarFeatures';
import HomeNavbarFeatures from './HomeNavbarFeatures';
import auth0Fctr from '../../coolReusableFunctions/auth0/auth0Fctr';

class NavbarSokwe extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedKey: 0,
		};
	}

	handleSelect(eventKey) {
		eventKey.preventDefault();
		switch(eventKey){
			case 1: // react router handles redirecting to /about
				this.setState({ selectedKey: eventKey });
				break;
			case 2: // react router handles redirecting to /isokoranye
				this.setState({ selectedKey: eventKey });
				break;
      case 3:	// react router handles redirecting to fcbk
  		  this.setState({ selectedKey: eventKey });
  			break;
			case 4:	// react router handles redirecting to /login
				this.setState({ selectedKey: eventKey });
				break;
			case 5:
				auth0Fctr.logout();
				// not sure if necessary cannot know as i cannot test
				// this.props.history.pushState(null,'/');
				break;
      case 6:	// react router handles redirecting to /logout
  			this.setState({ selectedKey: eventKey });
  			break;
      case 7:	// react router handles redirecting to /logout
    		this.setState({ selectedKey: eventKey });
    		break;
			default:
				break;
		};
	}

	function NavbarFeatures2Render(props) {
		if(this.props.isLoggedIn === true && this.props.isAdmin === true){
			// when loggedIn as Admin
			return (
				<AnyLoggedInUserNavbarFeatures
          showAdminFeatures={this.props.showAdminFeatures}
          currentUserName={this.props.getState().currentUser.username}
          selectedKey={this.state.selectedKey} />
			);
		}
    // when no one is loggedIn
    return (
      <HomeNavbarFeatures selectedKey={this.state.selectedKey} />
		);
	}

	render() {
		return (
			<Navbar staticTop collapseOnSelect>
				<Navbar.Header Navbar.Toggle>
					<IndexLinkContainer to="/">
						<Navbar.Brand>Sokwe</Navbar.Brand>
					</IndexLinkContainer>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse onSelect={this.handleSelect.bind(this)}>
			        <NavbarFeatures2Render />
				</Navbar.Collapse>
			</Navbar>
		);
	}
};

NavbarSokwe.propTypes = {
	isAdmin: PropTypes.bool.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	getState: PropTypes.func.isRequired,
	showAdminFeatures: PropTypes.bool.isRequired
};

export default NavbarSokwe;
