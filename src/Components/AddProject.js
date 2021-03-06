import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {

  constructor(){
    super();
    this.state = {
      newProject: {}
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Mobile App Development', 'Logo Design' ]
  }

  submitHandler (e) {
    e.preventDefault();
    if (this.refs.title.value ===''){
      alert("Title is required");
    }else{
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, function(){
        //console.log(this.state)
        this.props.addProject(this.state.newProject); 
        this.refs.title.value = '';
      });
    };
  }

  render() {
  let categoryOptions = this.props.categories.map(category => {
    return <option key={category} value={category} >{category}</option>
  });
    return (
      <div >
        <h3>Add Project</h3>
        <form onSubmit={this.submitHandler.bind(this)}>
          <div>
            <label >Title</label> <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label >Category</label> <br />
            <select  ref="category">
              {categoryOptions}
            </select>
          </div>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default AddProject;