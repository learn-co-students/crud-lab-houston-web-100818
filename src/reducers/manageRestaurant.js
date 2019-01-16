
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: []}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            let restaurant = {
                id: cuid(),
                text: action.restaurant,
                reviews: []
            }
            return {...state, restaurants: state.restaurants.concat(restaurant)}
        
        case 'DELETE_RESTAURANT':
            return {...state, restaurants: state.restaurants.filter(resto => resto.id !== action.restaurantId)}


        case 'ADD_REVIEW':
            let review = {
                id: cuid(),
                restaurantId: action.restaurantId,
                text: action.text
            }
            let idx = state.restaurants.findIndex(resto => resto.id === action.restaurant.id)
            let resto = {...action.restaurant, reviews: action.restaurant.reviews.concat(review)}

            return {...state, restaurants: [...state.restaurants.slice(0, idx), resto, ...state.restaurants.slice(idx + 1)]}

        case 'DELETE_REVIEW':
            let restoIdx = state.restaurants.findIndex(resto => resto.id === action.restaurant.id)
            let newResto = {...action.restaurant, reviews: action.restaurant.reviews.filter(review => review.id !== action.reviewId)}

            return {...state, restaurants: [...state.restaurants.slice(0, restoIdx), newResto, ...state.restaurants.slice(restoIdx + 1) ]}

        default:
            return state
    }
}
