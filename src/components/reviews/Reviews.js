import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  render() {

  const restaurantReviews = this.props.reviews.filter( review => {
    return review.restaurantId === this.props.restaurant.id 
  })

    return (
      <ul>
        { restaurantReviews.map( restaurantReview => {
          return <Review review={restaurantReview} deleteReview={this.props.deleteReview} />
        }) }
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteReview: (id) => {
      dispatch({ type: "DELETE_REVIEW", payload: id })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);