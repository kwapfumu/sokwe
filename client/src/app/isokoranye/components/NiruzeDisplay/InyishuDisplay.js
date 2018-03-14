import React from 'react';
import PropTypes from 'prop-types';

const InyishuDisplay = (props) => {
  if (props.displayInyishu) {
    return (
      <p>{props.inyishu}</p>
    );
  }
  return null;
};

InyishuDisplay.propTypes = {
  displayInyishu: PropTypes.bool.isRequired,
  inyishu: PropTypes.string.isRequired,
};
export default InyishuDisplay;
