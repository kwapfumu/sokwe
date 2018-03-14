import React, { Component, PropTypes } from 'react';
import SomethingWrong from './SomethingWrong';
/* Error boundaries are React components that catch JavaScript errors anywhere in their
* child component tree, log those errors, and display a fallback UI instead of the
* component tree that crashed. Error boundaries catch errors during rendering, in
* lifecycle methods, and in constructors of the whole tree below them.
* Note that error boundaries only catch errors in the components below them in the tree.
* An error boundary can’t catch an error within itself. If an error boundary fails trying
* to render the error message, the error will propagate to the closest error boundary
*  above it. This, too, is similar to how catch {} block works in JavaScript. */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
    };
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
      hasError: true,
    });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
  }
  // Displays fallback UI
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <SomethingWrong />
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {};
export default ErrorBoundary;
