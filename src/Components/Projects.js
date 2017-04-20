import React, { Component } from 'react';


class Projects extends Component {
  render() {
    console.log(this.props.projects);
    return (
      <div className="Projects">
        My Projects
      </div>
    );
  }
}

export default Projects;