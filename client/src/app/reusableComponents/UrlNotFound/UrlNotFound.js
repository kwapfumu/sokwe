import React from 'react';
import PropTypes from 'prop-types';

const UrlNotFound = ({ location }) => (
  <h1>{location.pathname} not Found</h1>
);

UrlNotFound.propTypes = {
  location: PropTypes.object.isRequired,
};
export default UrlNotFound;
