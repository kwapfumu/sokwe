import React, { PropTypes } from 'react';

const SomethingWrong = (props) => (
  <div>
    <h1>Something went wrong!</h1>
    <br />
    {props.error && props.error.toString()}
    <br />
    {props.errorInfo.componentStack}
  </div>
);

SomethingWrong.propTypes = {
  error: PropTypes.object.isRequired,
  errorInfo: PropTypes.object.isRequired,
};
export default SomethingWrong;
