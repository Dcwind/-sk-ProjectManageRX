import React, { Component } from 'react';


class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        My Projects
        console.log(this.props.projects)
      </div>
    );
  }
}

export default Projects;