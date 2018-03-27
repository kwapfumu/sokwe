import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import fetchIbisokozoActionsCreators from '../../actions/ibisokozoActionsCreators/fetchIbisokozoActionsCreators';


class IbisokozoLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchIbisokozoActionsCreators.fetchIbisokozo());
  }

  render() {
    return (
      <Grid>
        <Row>
          <h2>Ibisoko layout</h2>
          <ListGroup componentClass="ul">
            {IbisokozoList}
          </ListGroup>
        </Row>
      </Grid>
    );
  }
}

IbisokozoLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};
export default IbisokozoLayout;
