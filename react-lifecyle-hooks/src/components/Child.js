import React, { Component, Fragment } from 'react'

class Child extends Component{
	constructor(props) {
		super();
		console.log('______________________________________________________________');
		console.log('%c, >> Im Child Constructor !','color:green;font-weight:bold;');

	}
	componentWillMount() {
    	console.log('%c >> Im Child componentWillMount !', 'color:red;font-weight:bold;');

	}

	componentWillUpdate() {
    	console.log('%c >> Im Child componentWillUpdate !', 'color:green;font-weight:bold;');

	}

	componentDidMount() {
    	console.log('%c >> Im Child componentDidMount !', 'color:orange;font-weight:bold;');
	}

	componentWillReceiveProps() {
		console.log('%c>> Im Child componentWillReceiveProps', 'color:purple;font-weight:bold;font-size:20px;')
	}

	shouldComponentUpdate() {
		console.log('%c>> Im Child shouldComponentUpdate! Im the decision maker for continuing further execution! If I return true, componentWillUpdate will be called!', 'color:red;font-weight:bold;')
		//return false;
		return true;
	}

	componentDidUpdate() {
    	console.log('%c >> Im Child componentDidUpdate !', 'color:orange;font-weight:bold;');
	}

	componentWillUnmount() {
	    console.log('%cIm Child componentWillUnmount ! Im gonna die!', 'color:black;font-weight:bold;')
	  }

	render() {
		console.log('%c>> Im Child render ! ', 'color:black;font-weight:bold;');
		if (this.props.counter) {
			return (
					<Fragment>
						<h1>Hi Alfie! Im just another component! Please see console! {this.props.name} <br />Change Name Again to see your Component Die!</h1>
					</Fragment>
					)
		}
		else {
			return (
				<Fragment>
					<h1>Hi Alfie! Im just another component! Please see console! {this.props.name}</h1>
				</Fragment>
			)
		}
	}
}

export default Child;