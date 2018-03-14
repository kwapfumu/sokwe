import React, { PropTypes } from 'react';

const SomethingWrong = () => (
  <div>
    <h1>Something went wrong!</h1>
    <details style={{ whiteSpace: 'pre-wrap' }}>
      {this.state.error && this.state.error.toString()}
      <br />
      {this.state.errorInfo.componentStack}
    </details>
  </div>
);

SomethingWrong.propTypes = {};
export default SomethingWrong;
