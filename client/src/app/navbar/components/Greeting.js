import React from 'react';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
// Component greeting & displaying currentUserName in navbar
const Greeting = (props) => (
  <Navbar.Text pullRight>
    Hello, { props.currentUserName }
  </Navbar.Text>
);

Greeting.propTypes = {
  currentUserName: PropTypes.string.isRequired,
};

export default Greeting;
