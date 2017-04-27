import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
      this.setState({ projects: [
        {
            title: 'Business Website',
            category: 'Web Design'
          },
          {
            title: 'Stock App',
            category: 'Mobile App Development'
          },
          {
            title: 'Coffee Shop Logo',
            category: 'Logo Design'
          }
      ]});
  }

  handleProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App"> 
        <AddProject addProject={this.handleProject.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
