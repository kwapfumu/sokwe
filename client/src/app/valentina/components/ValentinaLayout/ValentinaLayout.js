import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-bootstrap';
import { fetchValentinasMsgs } from '../../actions/valentinasMsgsActionsCreators/fetchValentinasMsgsActionsCreators';
import ValentinaForm from '../ValentinaForm/ValentinaForm';
import ValentinaMsgsList from '../ValentinaMsgsList/ValentinaMsgsList';

class ValentinaLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchValentinasMsgs());
  }

  render() {
    return (
      <Grid>
        <Row>
          <ValentinaForm />
        </Row>
        <Row>
          <ValentinaMsgsList valentinaMsgs={this.props.valentinaMsgs} />
        </Row>
      </Grid>
    );
  }
}

ValentinaLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  valentinaMsgs: PropTypes.array.isRequired,
};
export default ValentinaLayout;
