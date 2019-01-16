import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.add(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Restaurant:</label>
          <input value={this.state.text} type='text' onChange={e => this.setState({text: e.target.value})} />
          <button type='submit'>ADD RESTAURANT</button> 
        </form>
      </div>
    );
  }
};

export default RestaurantInput;