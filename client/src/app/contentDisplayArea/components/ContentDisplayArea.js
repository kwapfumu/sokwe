import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnyLoggedInUserLayout from '../../anyLoggedInUser/components/AnyLoggedInUserLayout';
import AdminLayout from '../../admin/components/AdminLayout/AdminLayout';
// import HomeLayout from '../../home/components/HomeLayout';
// import AboutLayout from '../../about/components/AboutLayout';
import navbarRoutes from '../../navbar/navbarRoutes/navbarRoutes';
// import LoginForm from '../../loginNsignup/components/LoginForm/LoginForm';


// renders either HomeLayout or AdminLayout or any loggedin user component
const ContentDisplayArea = (props) => {
  if (props.isLoggedIn === true && props.isAdmin === false) {
    return (
      <AnyLoggedInUserLayout />
    );
  } else if (props.isLoggedIn === true && props.isAdmin === true) {
    return (
      <AdminLayout />
    );
  }
  return (
    <div>
      {navbarRoutes.map((route, id) => (
        // eslint-disable-next-line react/no-array-index-key
        <Route key={id} path={route.path} exact={route.exact} component={route.main} />
      ))}
      {/* eslint-disable-next-line react/jsx-no-bind
      <Route path="/login" render={(props) => <LoginForm {...props} />} /> */}
    </div>
  );
};

ContentDisplayArea.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

export default ContentDisplayArea;
