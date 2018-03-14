"use strict";
import React, { Component, PropTypes } from 'react';

const InyishuDisplay = (props) => {
	if(props.displayInyishu){
		return (
			<p>{props.inyishu}</p>
		);
	}else{
		return null;
	};	
};	

InyishuDisplay.propTypes={
	displayInyishu:PropTypes.bool.isRequired,
	inyishu:PropTypes.string.isRequired,
};
export default InyishuDisplay;