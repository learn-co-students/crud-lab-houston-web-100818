import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        {this.props.restaurant.reviews.map(review => <Review key={review.id} restaurant={this.props.restaurant} review={review} delete={this.props.delete} />)}
      </ul>
    );
  }
};

export default Reviews;