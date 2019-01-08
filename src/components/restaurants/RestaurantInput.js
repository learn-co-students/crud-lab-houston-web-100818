import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
    this.setState({ 
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <label>Restaurant Name: </label>
          <input 
            name='text'
            type='text'
            value={ this.state.text }
            onChange={ this.handleOnChange }
          />
          <input type='submit' onClick={this.handleOnSubmit} />  
        </form>
      </div>
    );
  }
};


export default RestaurantInput;
