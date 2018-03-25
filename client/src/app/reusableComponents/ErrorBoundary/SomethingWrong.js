import React, { PropTypes } from 'react';

const SomethingWrong = (props) => (
  <div>
    <h1>Something went wrong!</h1>
    <details style={{ whiteSpace: 'pre-wrap' }}>
      {props.error && props.error.toString()}
      <br />
      {props.errorInfo.componentStack}
    </details>
  </div>
);

SomethingWrong.propTypes = {
  error: PropTypes.string.isRequired,
  errorInfo: PropTypes.object.isRequired,
};
export default SomethingWrong;
