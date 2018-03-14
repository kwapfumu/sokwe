import React from 'react';
import PropTypes from 'prop-types';

const IgisokozoDisplay = (props) => {
  if (props.displayIgisokozo) {
    return (
      <p>{props.igisokozo}</p>
    );
  }
  return null;
};

IgisokozoDisplay.propTypes = {
  displayIgisokozo: PropTypes.bool.isRequired,
  igisokozo: PropTypes.string.isRequired,
};
export default IgisokozoDisplay;
