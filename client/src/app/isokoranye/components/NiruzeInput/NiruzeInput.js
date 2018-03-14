"use strict";
import React, { Component, PropTypes } from 'react';
import {Row, Col, Well, Button} from 'react-bootstrap';
import incrementUserScoreActionsCreators from '../../actions/currentUserActionsCreators/incrementUserScoreActionsCreators';

class NiruzeInput extends Component{
	constructor(props){
		super(props);
		this.state={
			userNyishu:'',
			feedbackText:'',
			isVerifying:false
		},
		//this.handleHinyuzaClick=this.handleHinyuzaClick.bind(this);
		
	},
	//returns inyishu from currently played aSokozo
	getInyishu(){
		let aNyishu = this.props.getState().aSokozo.inyishu;
		return aNyishu;
	},
	//if true inc userscore else reset usernyishu to empty string
	hinyuza(akaNyishu){
		let nyish = this.getInyishu();
		if(nyish === akaNyishu){
			this.props.dispatch(incrementUserScoreActionsCreators.incrementUserScore());
			this.setState({userNyishu:'',feedBackText:'aho kiyago!'});
			this.props.resetIgisokozoDisplay();
		}else{
			this.setState({feedBackText:'ituuuye!'});
			this.setState({userNyishu:''});
		};
	},
	handleChange(e){
		e.preventDefault();
		this.setState({userNyishu: e.target.value});
	},
	handleHinyuzaClick(e){
		e.preventDefault();
		this.setState({isVerifying:true});		
		this.hinyuza(this.state.userNyishu);
		this.setState({isVerifying:false});
	},
	handleNdaguhayeClick(e){
		e.preventDefault();
		this.props.showInyishu();
	},
	render(){
		return(
			{/*niruze_inputRow*/}
            <Row id="inputRow">
				<Col id="hinyuzaForm">
					<Row>
						<p><input type="text" id="inyishu" name="inyishu" placeholder="inyishu"
						          className="input-xlarge col-sm-offset-2 col-md-6 isokoranyeGrayTheme"
								  onChange={this.handleChange.bind(this)}></p>
                    </Row>
					{/*FeedbackRow*/}
                    <Row>	
						<Well>{this.state.feedbackText}</Well>
				    </Row>
                   {/* /FeedbackRow*/}					
					{/*hinyuzarowButtons*/ }
                    <Row id="hinyuzaButtonRow" style="padding-top:10px;" className="niruzeButtons">
						<Col mdOffset={2} md={1}>
							<p><Button bsStyle="primary" id="hinyuzaButton"
					                   bsSize="small"
									   disabled={isVerifying}
									   onClick={this.handleHinyuzaClick.bind(this)}>Hinyuza</Button>
							</p>
						</Col>
						<Col mdOffset={2} md={1}>
							<p><Button bsStyle="primary" id="ndaguhayeButton"
					                   bsSize="small"
									   onClick={this.handleNdaguhayeClick.bind(this)}>Ndaguhaye</Button>
							</p>
						</Col>
					</Row>
                     {/* /hinyuzarowButtons*/ }                                      
                </Col>
            </Row>
			{/* /niruze_inputRow*/}
		);
	};
};

NiruzeInput.propTypes={
	getState: PropTypes.func.isRequired,
	resetIgisokozoDisplay:PropTypes.func.isRequired,
	showInyishu:PropTypes.func.isRequired,
};

export default NiruzeInput;