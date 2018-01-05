import React, { Component } from 'react';



class AddProject extends Component {
  static defaultProps = {
  	categories : ["UX Design", "UI Development", "HTML5 Development"]
  }

  handleSubmit(e) {
  	// console.log(this.refs.category.value)
  	// console.log(this.refs.title.value)
  	e.preventDefault();
  	if (this.refs.title.value == '')
  		alert('Please enter title');
  	else {
  		this.setState({
  			newProject : {
  				title : this.refs.title.value,
  				category : this.refs.category.value
  			}
  		}, function() {
  			console.log(this.state);
  			this.props.addProject(this.state.newProject);
  		})
  	} 

  }
  render() {
  	let categoryOpts = this.props.categories.map(category => {
  		return (
  				<option value={category}>{category}</option>
  			);
  	})
    return (
      <div style={{flex : '1', order:2, borderRadius: '5px', backgroundColor: '#ccc', padding: '10px'}}>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
        	<div style={{margin: '10px'}}>
        		<label>Title</label>
        		<input type="text" ref="title" />
        	</div>
        	<div style={{margin: '10px'}}>
        		<label>Category</label>
        		<select ref="category">
        			{categoryOpts}
        		</select>
        	</div>
        	<input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddProject;
