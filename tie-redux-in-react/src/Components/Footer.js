import React, { Component, Fragment } from 'react'
import {fetchUser, changeAge} from '../actions/userActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Fragment>
				<div className="footer1">
					Copyright Alfie@2018
				</div>
				<div className="footer2">
					Sponsored By CSS Grid <br/>
					I'm trying to Access Store from this component :
							<br />
					<i style={{color:'#000'}}>{this.props.footeruser.name} | {this.props.footeruser.age} | {this.props.footeruser.email}</i>
							
				</div>
			</Fragment>
		)
	}
}

function mapStateToProps(state, prop) {
	console.table(state);
	return {
		footeruser : state.user
	}
}

export default connect(mapStateToProps)(Footer);