import React, { Component } from 'react';
import Projects from './Components/Projects';

class App extends Component {
  Constructor(){
    this.state = {
      projects: [
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
      ]
    }
  }
  render() {
    return (
      <div className="App">
        My App
        <Projects />
      </div>
    );
  }
}

export default App;
