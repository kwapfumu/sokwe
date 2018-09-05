import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import deleteUser from '../../actions/userActionsCreators/adminDeleteUserActionsCreators';
import fetchUsers from '../../actions/usersActionsCreators/fetchUsersActionsCreators';

class UsersList extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const usersList = this.props.users.map((aUser) => (
      // eslint-disable-next-line no-underscore-dangle
      <ListGroupItem key={aUser._id}>
        <strong>{aUser.name}</strong>
        <span className="text-muted">{aUser.email}</span>
        <Col xs={2} sm={2} md={2} lg={2}>
          <ButtonToolbar>
            <Button
              bsStyle="danger"
              bsSize="small"
              // eslint-disable-next-line no-underscore-dangle
              onClick={this.props.dispatch(deleteUser(aUser._id))}
            >
              <Glyphicon glyph="trash" />
            </Button>
          </ButtonToolbar>
        </Col>
      </ListGroupItem>
    ));

    return (
      <Col xs={9} sm={9} md={9} lg={8} id="usersListView">
        <ListGroup>
          {usersList}
        </ListGroup>
      </Col>
    );
  }
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default UsersList;
