import { GET_STORE } from './types'

// Get all restaurant data
export const getRestaurantList = () => dispatch => {
  fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json', {
    method: 'GET',
  })
    .then(response => response.json())
    .then(response =>
      dispatch({
        type: GET_STORE,
        payload: response.restaurants,
      })
    )
    .catch(error => {
      console.error(error)
    })
}
