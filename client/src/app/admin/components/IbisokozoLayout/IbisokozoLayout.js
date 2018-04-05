import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, ListGroup } from 'react-bootstrap';
import { fetchIbisokozo } from '../../actions/ibisokozoActionsCreators/fetchIbisokozoActionsCreators';
import adminGetIgisokozoByIdActionsCreators from '../../actions/adminIgisokozoActionsCreators/adminGetIgisokozoByIdActionsCreators';
import adminDeleteIgisokozoActionsCreators from '../../actions/adminIgisokozoActionsCreators/adminDeleteIgisokozoActionsCreators';
import AdminIgisokozoPanel from '../AdminIgisokozoPanel/AdminIgisokozoPanel';

class IbisokozoLayout extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchIbisokozo());
  }

  adminOpenEditSokozoForm(e, anId) {
    e.preventDefault();
    this.props.dispatch(adminGetIgisokozoByIdActionsCreators.getIgisokozo(anId));
    const sokozo2Edit = this.props.getState().aSokozo2Edit;
    if (sokozo2Edit !== null) {
      this.props.history('/admin/ibisokozo/:sokozoId/edit');
    }
  }

  deleteSokozo(e, anId) {
    e.preventDefault();
    this.props.dispatch(adminDeleteIgisokozoActionsCreators.deleteAsokozo(anId));
    this.props.history('/admin/ibisokozo');
  }

  render() {
    const IbisokozoList = this.props.ibisokozo.map((aSokozo) => (
      <AdminIgisokozoPanel
        // eslint-disable-next-line no-underscore-dangle
        key={aSokozo._id}
        aSokozo={aSokozo}
        handleClickEditSokozo={this.adminOpenEditSokozoForm.bind(this)}
        handleClickDeleteSokozo={this.deleteSokozo.bind(this)}
      />
    ));
    return (
      <Grid>
        <Row>
          <h2>This is Ibisoko layout</h2>
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
  getState: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  ibisokozo: PropTypes.arrayOf(PropTypes.object).isRequired,
  // match: PropTypes.shape({
  // params: PropTypes.object.isRequired,
  //  isExact: PropTypes.bool.isRequired,
  //  path: PropTypes.string.isRequired,
  //  url: PropTypes.string.isRequired,
  // }).isRequired,
};
export default IbisokozoLayout;
