import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

const ValentinaMsgsList = (props) => {
  const ValaMsgs = props.valentinaMsgs.map((valaMsg) => (
    // eslint-disable-next-line no-underscore-dangle
    <ListGroupItem key={valaMsg._id}>
      <Panel header={valaMsg.to} bsStyle="danger">
        <p>{valaMsg.msg}</p>
        <p>{valaMsg.from}</p>
      </Panel>
    </ListGroupItem>
  ));
  return (
    <Panel header="msgs..." bsStyle="danger">
      <ListGroup>
        {ValaMsgs}
      </ListGroup>.
    </Panel>
  );
};
ValentinaMsgsList.propTypes = {
  valentinaMsgs: PropTypes.array.isRequired,
};
