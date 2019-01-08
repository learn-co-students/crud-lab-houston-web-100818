import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <ReviewInput restaurant={restaurant} addReview={this.props.addReview} />
        <Reviews restaurant={restaurant}/>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: review => dispatch({ type: "ADD_REVIEW", payload: review })
  }
}

export default connect(null, mapDispatchToProps )(ReviewsContainer)
