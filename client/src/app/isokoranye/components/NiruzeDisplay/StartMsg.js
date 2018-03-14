"use strict";
import React, { Component, PropTypes } from 'react';

const StartMsg = (props) => {
	if(this.props.showStartMsg){
		return ( 
			<p>{this.props.startMsg}</p>
		);
	}else{
		return null;
	};	
};
	
StartMsg.propTypes={
	showStartMsg:PropTypes.bool.isRequired,
	startMsg:PropTypes.string.isRequired,
};
export default StartMsg;