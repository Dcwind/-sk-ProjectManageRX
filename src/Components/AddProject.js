import React, { Component } from 'react';


class AddProject extends Component {
  render() {
  
    return (
      <div >
        <h3>Add Project</h3>
        <form action="">
          <div>
            <label >Title</label> <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label >Category</label> <br />
            <select name="" ref="category"></select>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProject;