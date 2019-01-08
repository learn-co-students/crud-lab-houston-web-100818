import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';


class Restaurants extends Component {
  render() {
    return(
      <ul>
        { this.props.restaurants.map( (restaurant) => {
          return <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant} />
        }) }
      </ul>
    );
  }
};

const mapStateToProps = (state) => {
  return {restaurants: state.restaurants} 
}

const mapDispatchToProps = dispatch => {
  return {
    deleteRestaurant: (id) => {
      dispatch({ type: "DELETE_RESTAURANT", payload: id} )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);