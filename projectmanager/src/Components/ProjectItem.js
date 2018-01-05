import React, { Component } from 'react';



class ProjectItem extends Component {
	
  handleDel(id) {
    this.props.addDel(id);
  }
  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title} </strong>: {this.props.project.category} -- <a href="#" onClick={this.handleDel.bind(this, this.props.project.id)}>(x)</a>
      }
      </li>
    );
  }
}

export default ProjectItem;
