import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';

const AnyLoggedInUserLayout = (props) => (
  <Grid>
    <Row>
      {/* React Router will automatically set the children props to whichever
        is the appropriate component based on the current route */}
      {React.cloneElement(props.children, props)}
    </Row>
  </Grid>
);

AnyLoggedInUserLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AnyLoggedInUserLayout;
