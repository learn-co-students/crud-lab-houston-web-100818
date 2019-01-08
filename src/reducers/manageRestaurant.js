
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
    switch (action.type) {
        case "ADD_RESTAURANT":
        const restaurant = {
            text: action.payload.text,
            id: cuid(),
        }
            return { ...state, restaurants: [...state.restaurants, restaurant]}
            break;

        case "DELETE_RESTAURANT":
            return {...state, restaurants: state.restaurants.filter( (restaurant) => restaurant.id !== action.payload)}
            break;

        case "ADD_REVIEW":
        const review = {
            text: action.payload.text,
            restaurantId: action.payload.restaurantId,
            id: cuid()
        }
            return {...state, reviews: [...state.reviews, review]}
            break;

        case "DELETE_REVIEW":
            return { ...state, reviews: state.reviews.filter((review) => review.id !== action.payload) }
            break;

        default:
        return state
            break;
    }
}
