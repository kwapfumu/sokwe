import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import fetchIbisokozoActionsCreators from '../../actions/ibisokozoActionsCreators/fetchIbisokozoActionsCreators';
import adminDeleteIgisokozoActionsCreators from '../../actions/adminIgisokozoActionsCreators/adminDeleteIgisokozoActionsCreator';
import AdminIgisokozoPanel from '../AdminIgisokozoPanel/AdminIgisokozoPanel';

class IbisokozoLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchIbisokozoActionsCreators.fetchIbisokozo());
  }

  adminOpenEditSokozoForm(e) {
    e.preventDefault();
    // eslint-disable-next-line no-template-curly-in-string
    this.props.history.push('/admin/ibisokozo/:aSokozoId/edit');
  }

  deleteSokozo(e, anId) {
    e.preventDefault();
    this.props.dispatch(adminDeleteIgisokozoActionsCreators.deleteAsokozo(anId));
  }

  dispayIbisokozoList() {
    return this.props.ibisokozo.map((aSokozo) => (
      <AdminIgisokozoPanel
        // eslint-disable-next-line no-underscore-dangle
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
            {this.dispayIbisokozoList()}
          </ListGroup>
        </Row>
      </Grid>
    );
  }
}

IbisokozoLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  ibisokozo: PropTypes.array.isRequired,
  // match: PropTypes.shape({
  // params: PropTypes.object.isRequired,
  //  isExact: PropTypes.bool.isRequired,
  //  path: PropTypes.string.isRequired,
  //  url: PropTypes.string.isRequired,
  // }).isRequired,
};
export default IbisokozoLayout;
