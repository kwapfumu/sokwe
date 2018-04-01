import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { ongeramwoButton } from '../../../isokoranye/scss/ongeramwo.scss';

const required = function required(value) {
  return value ? undefined : 'Required';
};

const minLength = function minLength(min, value) {
  if (value && value.length > min) {
    return `Must be ${min} characters or more`;
  }
  return undefined;
};
const minLength5 = minLength(5);
const maxLength = function maxLength(max, value) {
  if (value && value.length > max) {
    return `Must be ${max} characters or less`;
  }
  return undefined;
};
const maxLength35 = maxLength(35);
const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="input-xlarge col-md-5" />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let AddIgisokozoForm = (props) => (
  <form id="addIgisokozoForm" onSubmit={props.handleSubmit.bind(this)}>
    <div className="Row">
        <p>
          <Field
            name="igisokozo"
            id="igisokozo"
            className="isokoranyeGrayTheme"
            type="text"
            component={renderField}
            label="igisokozo"
            validate={[required, minLength5, maxLength35]}
          />
          <Field
            name="inyishu"
            id="inyishu"
            className="col-sm-offset-1 isokoranyeGrayTheme"
            type="text"
            component={renderField}
            label="inyishu"
            validate={[required, minLength5, maxLength35]}
          />
          </p>
        </div>
        {/* ongeramwoButtonRow */}
        <div className="Row" id="ongeramwoButton" style={ongeramwoButton}>
          <p>
            <button
              type="submit"
              disabled={submitting}
              id="ongeramwoButton"
              className="col-md-offset-4 col-md-1"
            >
              Ongeramwo
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Futa vyose
            </button>
          </p>
        </div>
      </form>
    );
  }
};

AddIgisokozoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

// Creates a decorator with which you use redux-form to connect your form component to Redux.
// It takes a config parameter which lets you configure your form.
// the name of your form and the key(i.e form) to where your form's state will be mounted under
// the redux-form reducer
AddIgisokozoForm = reduxForm({ form: 'aSokozo2Add' })(AddIgisokozoForm);
export default AddIgisokozoForm;
