import React, { Component } from 'react'
import Name from './Name'

class Names extends Component {
	componentDidMount() {
		debugger;
	}
	render() {
		return (
			<div className="">
	          <ul>
	            <Name names={this.props.users}/>
	          </ul>
	        </div>
		)
	}
}

export default Names;