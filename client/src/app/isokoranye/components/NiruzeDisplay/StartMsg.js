import React from 'react';
import PropTypes from 'prop-types';

const StartMsg = (props) => {
  if (props.showStartMsg) {
    return (
      <p>{props.startMsg}</p>
    );
  }

  return null;
};

StartMsg.propTypes = {
  showStartMsg: PropTypes.bool.isRequired,
  startMsg: PropTypes.string.isRequired,
};
export default StartMsg;
