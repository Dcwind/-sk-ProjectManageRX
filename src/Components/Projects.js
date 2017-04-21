import React, { Component } from 'react';


class Projects extends Component {
  render() {
    let projectItem;
    if(this.props.projects){
      projectItem = this.props.projects.map(projects => {
        console.log(projects);
      });
    }
    return (
      <div className="Projects">
        My Projects
      </div>
    );
  }
}

export default Projects;