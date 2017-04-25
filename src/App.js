import React, { Component } from 'react';
import Projects from './Components/Projects';

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
            title: 'Clinic Website',
            category: 'Web Design'
          },
          {
            title: 'Coffee Shop Logo',
            category: 'Logo Design'
          }
      ]});
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
