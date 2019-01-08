import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state = {
    text: ''
  }
  
  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addReview({...this.state, restaurantId: this.props.restaurant.id })
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleOnSubmit(e)} >
          <input 
            name="text"
            type="textarea"
            placeholder="Enter review here"
            value={ this.state.text }
            onChange={(e) => {
              this.setState({ [e.target.name]: e.target.value })}}
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
