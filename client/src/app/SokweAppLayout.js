import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import ErrorBoundary from './reusableComponents/ErrorBoundary/ErrorBoundary';
import NavbarSokwe from './navbar/components/NavbarSokwe';
import ContentDisplayArea from './contentDisplayArea/components/ContentDisplayArea';
import FooterSokwe from './footer/components/FooterSokwe';


class SokweAppLayout extends Component {
  constructor(props) {
    super(props);
    // no need to be in redux state koz not fetched from server
    this.state = {
      isAdmin: false,
      isLoggedIn: false,
      showAdminNavbarFeatures: false,
    };
  }

  setIsLoggedInTrue() {
    this.setState({ isLoggedIn: true });
  }

  setIsAdminTrue() {
    this.setState({ isAdmin: true });
  }

  render() {
    return (
      <div className="sokweAppContainer">
        {/* <ErrorBoundary> */}
        <NavbarSokwe
          isAdmin={this.state.isAdmin}
          isLoggedIn={this.state.isLoggedIn}
          showAdminFeatures={this.state.showAdminNavbarFeatures}
        />
        {/* </ErrorBoundary> */}
        {/* <ErrorBoundary> */}
        <ContentDisplayArea
          isAdmin={this.state.isAdmin}
          isLoggedIn={this.state.isLoggedIn}
          setIsLoggedInTrue={this.setIsLoggedInTrue.bind(this)}
          setIsAdminTrue={this.setIsAdminTrue.bind(this)}
        />
        {/* </ErrorBoundary> */}
        {/* <ErrorBoundary> */}
        <FooterSokwe />
        {/* </ErrorBoundary> */}
      </div>
    );
  }
}
// SokweAppLayout.propTypes = {
//  sokweUsers: PropTypes.shape({
//    username: PropTypes.string,
//    email: PropTypes.string
//  }).isRequired,
// };

export default SokweAppLayout;
