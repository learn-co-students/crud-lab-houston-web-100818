import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant = {this.props.addRestaurant} />
        <hr />
        <Restaurants />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addRestaurant: payload => dispatch({ 
    type: "ADD_RESTAURANT", payload, 
  })
})

export default connect(null, mapDispatchToProps)(RestaurantsContainer)
