import React from 'react';
import PropTypes from 'prop-types';
import AnyLoggedInUserNavbarFeatures from './AnyLoggedInUserNavbarFeatures';
import HomeNavbarFeatures from './HomeNavbarFeatures';

const NavbarFeatures2Render = (props) => {
  if (props.isLoggedIn === true) {
    // when loggedIn
    return (
      <AnyLoggedInUserNavbarFeatures
        isAdmin={props.isAdmin}
        showAdminFeatures={props.showAdminFeatures}
        currentUserName={props.getState().currentUser.username}
        selectedKey={props.selectedKey}
      />
    );
  }
  // when no one is loggedIn
  return (
    <HomeNavbarFeatures selectedKey={props.selectedKey} />
  );
};

NavbarFeatures2Render.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  getState: PropTypes.func.isRequired,
  showAdminFeatures: PropTypes.bool.isRequired,
  selectedKey: PropTypes.number.isRequired,
};

export default NavbarFeatures2Render;
