import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; //connect portion of react redux

import {fetchUser, changeAge} from '../actions/userActions'

//decorator to create wrapper for this component for injecting props from store
/*@connect((store) => {
	return {
		foo : 'Welcome'
	}
}*/
class Layout extends Component {
	constructor() {
		super();
	}
	componentWillMount() {
		//this.props.action.dispatch(fetchUser);
	}
	render() {
		return (
				<Fragment>
					<div className="blog-list">
							<h4>Welcome <i style={{color:'indigo'}}>{this.props.user.name}!</i> </h4>
							<strong style={{color:'#000'}}><i>
							{
								this.props.user.age != null?"You are "+this.props.user.age+ " years old":''
								
							}
							{
								this.props.user.email != null?" & You are reachable at "+this.props.user.email:''
							}
							</i></strong>


								
							
					</div>
					<div className="add-blog">
							<button onClick={this.props.action.fetchUser}>Login</button> <br />
							<button onClick={() => this.props.action.changeAge(2)}>Change Age</button>
					</div>
				</Fragment>
		)
	}
}
//The following functions are required to establish connect between redux and react components
function mapStateToProps(state, prop) {
	console.table(state);
	return {
		user : state.user
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action : bindActionCreators({fetchUser, changeAge}, dispatch)
	}
}

//export default Layout;
export default connect(mapStateToProps, mapDispatchToProps)(Layout)