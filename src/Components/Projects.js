import React, { Component } from 'react';


class Projects extends Component {
  render() {
    let projectItem;
    if(this.props.projects){
      projectItem = this.props.projects.map(projects => {
       return (
         <projectItem key={project.title} project={project}/>
       );
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