"use strict";
import React, { Component, PropTypes } from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';
import getIgisokozoActionsCreators from '../../actions/igisokozoActionsCreators/getIgisokozoActionsCreators';
import StartMsg from './StartMsg';
import SokweMsg from './SokweMsg';
import IgisokozoDisplay from './IgisokozoDisplay';
import InyishuDisplay from './InyishuDisplay';

class NiruzeDisplay extends Component{
	constructor(props){
		super(props);
		this.state={
			showStartMsg: false,
			showSokweMsg: false,
			showNiruzeMsg: false,				
		};
	},	
	handleTanguraClick(e){
		e.preventDefault();
		e.stopPropagation();
		this.setState({showStartMsg:false});
		this.setState({showSokweMsg:true});
	},
	handleNiruzeClick(e){
		e.preventDefault();
		e.stopPropagation();
		//sets displayIgisokozo:true
		this.props.showIgisokozo();		
	},	
	componentDidMount{
		this.setState({showStartMsg:true});
	},
	render(){	
		return (
			<Row>
				{/*SokweDisplayWell*/}
				<Row>
					<Col mdOffset={1} lgOffset={1}>
						<Well className="isokoranyeGrayTheme">
							<StartMsg startMsg="Amakuru? Tangura sha..." showStartMsg={this.state.showStartMsg}/>
							<SokweMsg sokweMsg="Sokwe?" showSokweMsg={this.state.showSokweMsg}/>
							{/*<NiruzeMsg niruzeMsg="Niruze!" showNiruzeMsg={this.state.showNiruzeMsg}/>*/}
							<IgisokozoDisplay igisokozo={this.props.aSokozo.igisokozo} 
							                  displayIgisokozo={this.props.displayIgisokozo}/>
							<InyishuDisplay inyishu={this.props.aSokozo.inyishu} 
							                displayInyishu={this.props.displayInyishu}/>
						</Well>
					</Col>
				</Row>
				{/* /SokweDisplayWell*/}
				{/*sokweButtonRow*/}
				<Row className="niruzeButtons">
					<Col mdOffset={2} md={1}>
						<p><Button bsStyle="primary" 
					               bsSize="small"
							       disabled={isLoading}
							       onClick={!isLoading ? this.handleTanguraClick.bind(this) : null}>{isLoading ? 'Loading': 'Tangura'}</Button>
					    </p>
					</Col>
					<Col mdOffset={2} md={1}>
						<p><Button bsStyle="primary" 
					               bsSize="small"
							       disabled={isLoading}
							       onClick={!isLoading ? this.handleNiruzeClick.bind(this) : null}>{isLoading ? 'Loading': Niruze}</Button>
					    </p>
					</Col>					
				</Row>
				{/* /sokweButtonRow*/}			
			</Row>
		);
	};
};

NiruzeDisplay.propTypes={
	aSokozo:PropTypes.object.isRequired,
	dispatch:PropTypes.func.isRequired,
	displayIgisokozo:PropTypes.bool.isRequired,
	displayInyishu:PropTypes.bool.isRequired,	
	showIgisokozo:PropTypes.func.isRequired,
};
export default NiruzeDisplay;

