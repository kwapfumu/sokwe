import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import adminEditIgisokozoActionsCreators from '../../actions/adminIgisokozoActionsCreators/adminEditIgisokozoActionsCreators';
import { ongeramwoButton } from '../../../isokoranye/scss/ongeramwo.scss';
/* Initialize From State
* Values provided to the initialValues prop or reduxForm() config parameter will be loaded into the
* form state and treated thereafter as "pristine". They will also be the values that will be
* returned to when reset() is dispatched. In addition to saving the "pristine" values, initializing
* your form will overwrite any existing values.
* In many applications, these values will be coming from the server and stored in another Redux
* reducer.
* To get those values into your redux-form-decorated component, you will need to connect() to the
* Redux state yourself and map from the data reducer to the initialValues prop.
* By default, you may only initialize a form component once via initialValues. There are two methods
* to reinitialize the form component with new "pristine" values:
*  1. Pass a enableReinitialize prop or reduxForm() config parameter set to true to allow the
* form the reinitialize with new "pristine" values every time the initialValues prop changes.
* To keep dirty form values when it reinitializes, you can set keepDirtyOnReinitialize to true.
* By default, reinitializing the form replaces all dirty values with "pristine" values.
* 2. Dispatch the INITIALIZE action (using the action creator provided by redux-form).
* ****
* **initialize(form:String, data:Object, [keepDirty:boolean], [options:{keepDirty:boolean,
* keepSubmitSucceeded:boolean, updateUnregisteredFields:boolean, keepValues:boolean}]) #
* Sets the initial values in the form with which future data values will be compared to calculate
* dirty and pristine. The data parameter may contain deep nested array and object values that match
* the shape of your form fields.
* If the keepDirty parameter is true, the values of currently dirty fields will be retained to avoid
* overwriting user edits. (keepDirty can appear as either the third argument, or a property of
* options as the 3rd or 4th argument, for the sake of backwards compatibility).
* If the keepSubmitSucceeded parameter is true, it will not clear the submitSucceeded flag if it
* is set.
* If the updateUnregisteredFields parameter is true, it will update every initialValue if still
* pristine instead of only registered fields. Highly recommended, defaults to false because of
* non-breaking backwards compatibility.
* If the keepValues parameter is true, it will keep the old values and initial values. */
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
// eslint-disable-next-line react/prop-types, object-curly-newline
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type} className="input-xlarge col-md-5" />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);
// eslint-disable-next-line import/no-mutable-exports
let AdminEditSokozoForm = (props) => {
  const handleSubmit = function handleSubmit(e, values) {
    e.preventDefault();
    // eslint-disable-next-line max-len
    props.dispatch(adminEditIgisokozoActionsCreators.editIgisokozo(props.match.params.sokozoId, values));
    props.history.push('/admin/ibisokozo');
    e.stopPropagation();
  };

  return (
    <form id="addIgisokozoForm" onSubmit={handleSubmit.bind(this)}>
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
            disabled={props.pristine || props.submitting}
            id="ongeramwoButton"
            className="col-md-offset-4 col-md-1"
          >
            Ongeramwo
          </button>
          <button
            type="button"
            disabled={props.pristine || props.submitting}
            onClick={props.reset}
          >
            Futa vyose
          </button>
        </p>
      </div>
    </form>
  );
};

AdminEditSokozoForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

// Creates a decorator with which you use redux-form to connect your form component to Redux.
// It takes a config parameter which lets you configure your form.
// the name of your form and the key(i.e form) to where your form's state will be mounted under
// the redux-form reducer
AdminEditSokozoForm = reduxForm({ form: 'aSokozo2Edit' })(AdminEditSokozoForm);
AdminEditSokozoForm = connect((state) => ({
  initialValues: state.aSokozo2Edit, // pull initial values from state tree
}))(AdminEditSokozoForm);

export default AdminEditSokozoForm;
