import React, { Component } from 'react';
import ProjectItem from './ProjectItem'


class Projects extends Component {
	handleDelet(id) {
		this.props.ondel(id);
	}
  // There should be only once parent div below such as <div className="App">. all other elements should go inside it.
  render() {
  	let ProjectItems;
  	if (this.props.projects) {
  		ProjectItems = this.props.projects.map(project => {
  			console.log(project);
  			return (
  				<ProjectItem addDel={this.handleDelet.bind(this)} project={project} />
  				);
  		})
  	}
  	console.log(this.props.projects)
    return (

      <div className="Projects" style={{flex : '2', padding: '10px', flexBasis: '25%', marginRight: '10px',order:1, backgroundColor: '#ddd', borderRadius : '5px'}}>
        <h3> Latest Projects</h3>
        {ProjectItems}
      </div>
    );
  }
}

/*Projects.propTypes  = {
	projects : React.prop-types.array,
	ondel : React.prop-types.func
}*/

export default Projects;
