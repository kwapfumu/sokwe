import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import fetchIbisokozoActionsCreators from '../../actions/ibisokozoActionsCreators/fetchIbisokozoActionsCreators';
import AdminIgisokozoPanel from '../AdminIgisokozoPanel/AdminIgisokozoPanel';

class IbisokozoLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchIbisokozoActionsCreators.fetchIbisokozo());
  }

  adminOpenEditSokozoForm(e) {
    e.preventDefault();
    this.props.history.push('/')
  }

  deleteSokozo(e,id) {
    e.preventDefault();
    this.props.dispatch();
  }

  dispayIbisokozoList() {
    ibisokozo.map((aSokozo) => (
      <AdminIgisokozoPanel
        key={aSokozo._id}
        aSokozo={aSokozo}
        handleClickEditSokozo={this.adminOpenEditSokozoForm.bind(this)}
        handleClickDeleteSokozo={this.deleteSokozo.bind(this)}
      />
    ));
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
  history: PropTypes.shape({
    push: PropTypes.element.isRequired,
  }).isRequired,
};
export default IbisokozoLayout;
