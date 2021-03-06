import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ comment: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ comment: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}
