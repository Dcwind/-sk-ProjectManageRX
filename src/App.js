import React, { Component } from 'react';
import Projects from './Components/Projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        My App
        <Projects text="Hello World"/>
      </div>
    );
  }
}

export default App;
