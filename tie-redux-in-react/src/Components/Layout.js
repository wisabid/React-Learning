import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; //connect portion of react redux

import {fetchUser, changeAge} from '../actions/userActions'
import {fetchAllBlogs} from '../actions/blogsAction'

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
		const blogsli = this.props.blogs.map((item) => {
			return <li key={item.email}>{item.email} : {item.about}</li>
		})
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
							<div style={{borderRadius : '20px', padding: '10px', height: '200px', overflow: 'auto', background : '#fff', color : '#000', margin: '5px'}}>
								<h4>Blogs List</h4>
								<ol>
									{blogsli}
								</ol>
							</div>


								
							
					</div>
					<div className="add-blog">
							<button onClick={this.props.action.fetchUser}>Login</button> <br />
							<button onClick={() => this.props.action.changeAge(2)}>Change Age</button><br/>
							<button onClick={this.props.action.fetchAllBlogs}>Load Blogs</button>
					</div>
				</Fragment>
		)
	}
}
//The following functions are required to establish connect between redux and react components
function mapStateToProps(state, prop) {
	console.table(state);
	return {
		user : state.user,
		blogs : state.blogs
	};
}

function mapDispatchToProps(dispatch) {
	return {
		action : bindActionCreators({fetchUser, changeAge, fetchAllBlogs}, dispatch)
	}
}

//export default Layout;
export default connect(mapStateToProps, mapDispatchToProps)(Layout)