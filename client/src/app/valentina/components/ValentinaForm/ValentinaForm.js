import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

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
const maxLength15 = maxLength(15);
const maxLength240 = maxLength(240);
// eslint-disable-next-line react/prop-types, object-curly-newline
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="input-xlarge col-md-5 isokoranyeGrayTheme" />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
const ValentinaForm = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="to"
        type="text"
        component={renderField}
        label="to"
        validate={[required, maxLength15, minLength5]}
        warn={minLength5}
      />
      <Field
        name="from"
        type="text"
        component={renderField}
        label="From"
        validate={[required, maxLength15, minLength5]}
        warn={minLength5}
      />
      <Field
        name="msg"
        type="textarea"
        component="textarea"
        label="msg"
        validate={[required, maxLength240, minLength5]}
        warn={minLength5}
      />
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

ValentinaForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({ form: 'valentinaForm' })(ValentinaForm);
