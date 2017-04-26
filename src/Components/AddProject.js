import React, { Component } from 'react';


class AddProject extends Component {
  static defaultProps = {
    categories: ['Web Design', 'Mobile App Development', 'Logo Design' ]
  }
  render() {
  let categoryOptions = this.props.categories.map(category => {
    return <option value="category" key={category}>{category}</option>
  });
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