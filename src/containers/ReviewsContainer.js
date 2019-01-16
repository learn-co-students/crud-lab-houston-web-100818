import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput add={this.props.add} restaurant={this.props.restaurant} />
        <Reviews restaurant={this.props.restaurant} delete={this.props.delete} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (restaurant, text) => dispatch({ type: 'ADD_REVIEW', restaurant, text }),
    delete: (restaurant, reviewId) => dispatch({ type: 'DELETE_REVIEW', restaurant, reviewId })
  }
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
