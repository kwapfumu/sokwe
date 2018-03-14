"use strict";
import React, { Component, PropTypes } from 'react';

const SokweMsg = (props) => {
	if(this.props.showSokweMsg){
		return (
			<p>{this.props.sokweMsg}</p>
		);
	}else{
		return null;
	};
};		

SokweMsg.propTypes={
	showSokweMsg:PropTypes.bool.isRequired,
	sokweMsg:PropTypes.string.isRequired,
};
export default SokweMsg;