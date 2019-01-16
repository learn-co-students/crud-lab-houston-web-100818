import React, { Component } from 'react';

class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.add(this.props.restaurant, this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Review:</label>
          <input value={this.state.text} type='text' onChange={e => this.setState({ text: e.target.value })} />
          <button type='submit'>ADD REVIEW</button>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
