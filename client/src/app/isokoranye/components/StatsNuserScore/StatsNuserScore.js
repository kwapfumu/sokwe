import React from 'react';
import PropTypes from 'prop-types';
import { Well, ListGroup, ListGroupItem } from 'react-bootstrap';

const StatsNuserScore = (props) => {
  const handleOnClick = function handleOnClick(e) {
    e.preventDefault();
    props.toggleShowAddIgisokozoForm();
  };

  return (
    <Well bsSize="large" className="sidebar-nav">
      <ListGroup>
        <ListGroupItem onClick={handleOnClick.bind(this)}>Ongeramwo ibisokozo</ListGroupItem>
        <ListGroupItem header="Amanota" className="userScore">
          {props.username} : <span id="userScore">{props.thisGameScore}</span>
        </ListGroupItem>
      </ListGroup>
    </Well>
  );
};

StatsNuserScore.propTypes = {
  username: PropTypes.string.isRequired,
  thisGameScore: PropTypes.number.isRequired,
  toggleShowAddIgisokozoForm: PropTypes.func.isRequired,
};

export default StatsNuserScore;
