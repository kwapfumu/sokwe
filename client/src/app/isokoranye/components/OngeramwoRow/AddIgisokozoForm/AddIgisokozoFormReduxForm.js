import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const required = (value) => value ? undefined : 'Required';
const minLength = (min) => value =>
  value && value.length > min ? `Must be ${min} characters or more` : undefined;
 const minLength5 = minLength(5)
const maxLength = (max) => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength35 = maxLength(35);
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
	<div>
		<div>
			<input {...input} placeholder={label} type={type} className="input-xlarge col-md-5"/>
			{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
		</div>
	</div>
);

const AddIgisokozoFormReduxForm = (props) => {
    return (
		<form id="addIgisokozoForm" onSubmit={props.handleSubmit}>
			<div className="Row">
				<p><Field name="igisokozo" id="igisokozo" className="isokoranyeGrayTheme"
					   type="text"
					   component={renderField}
					   label="igisokozo"
					   validate={[ required, minLength5, maxLength15 ]}/>
			    <Field name="inyishu" id="inyishu" className="col-sm-offset-1 isokoranyeGrayTheme"
				       type="text"
					   component={renderField}
					   label="inyishu"
					   validate={[ required, minLength5, maxLength15 ]}/></p>
			</div>
			{/*ongeramwoButtonRow*/}
			<div className="Row" id="ongeramwoButton" style="padding-top:10px;">
				<p><button type="submit"
				           disabled={props.submitting}
						   id="ongeramwoButton"
						   className="col-md-offset-4 col-md-1">Ongeramwo</button></p>
			</div>
		</form>
    );
 };


// Creates a decorator with which you use redux-form to connect your form component to Redux. It takes a config parameter which lets you configure your form.
AddIgisokozoFormReduxForm = reduxForm({
	/**the name of your form and the key(i.e form) to where your form's state will be mounted under the redux-form reducer*/
	form: 'aSokozo2Add'})(AddIgisokozoFormReduxForm);

export default AddIgisokozoFormReduxForm;
