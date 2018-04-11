import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import IsokoranyeContainer from '../../isokoranye/containers/IsokoranyeContainer';

const AnyLoggedInUserLayout = () => (
  <Grid>
    <Row>
      {/* React Router will automatically set the children props to whichever
        is the appropriate component based on the current route */}
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Route path="/isokoranye" exact="true" render={() => <IsokoranyeContainer />} />
    </Row>
  </Grid>
);

// AnyLoggedInUserLayout.propTypes = {};
export default AnyLoggedInUserLayout;
