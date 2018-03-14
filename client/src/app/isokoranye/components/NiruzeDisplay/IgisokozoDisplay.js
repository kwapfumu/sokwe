"use strict";
import React, { Component, PropTypes } from 'react';

const IgisokozoDisplay = (props) => {
	if(props.displayIgisokozo){
		return ( 
			<p>{props.igisokozo}</p>
		);
	}else{
		return null;
	};
};
		

IgisokozoDisplay.propTypes={
	displayIgisokozo:PropTypes.bool.isRequired,
	igisokozo:PropTypes.string.isRequired,
};
export default IgisokozoDisplay;