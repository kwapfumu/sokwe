import React from 'react';
import PropTypes from 'prop-types';
import AddIgisokozoForm from '../OngeramwoRow/AddIgisokozoForm/AddIgisokozoForm';

const DisplayIgisokozoForm = (props) => {
  if (props.showAddIgisokozoForm) {
    return (
      <AddIgisokozoForm handleSubmit={props.submit} />
    );
  }
  return null;
};
DisplayIgisokozoForm.propTypes = {
  showAddIgisokozoForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};
export default DisplayIgisokozoForm;
