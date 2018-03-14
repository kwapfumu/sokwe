import React from 'react';
import PropTypes from 'prop-types';

const SokweMsg = (props) => {
  if (props.showSokweMsg) {
    return (
      <p>{props.sokweMsg}</p>
    );
  }

  return null;
};

SokweMsg.propTypes = {
  showSokweMsg: PropTypes.bool.isRequired,
  sokweMsg: PropTypes.string.isRequired,
};
export default SokweMsg;
