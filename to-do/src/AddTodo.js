import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
        content: ''
    })
  };

  render() {
    return (
      <div className="container px-5">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Add New Todo:</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.content}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
