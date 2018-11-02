import React from 'react'
import RestaurantDetails from './RestaurantDetails'
import gradient from '../assets/cellGradientBackground@2x.png'

const RestaurantListItem = ({ handleClick, restaurant }) => {
  const styles = {
    backgroundImage: `url(${gradient}), url(${restaurant.backgroundImageURL})`,
  }
  return (
    <li
      onClick={() => handleClick(restaurant)}
      className="restaurant-list-item"
      style={styles}
    >
      <RestaurantDetails
        name={restaurant.name}
        category={restaurant.category}
      />
    </li>
  )
}

export default RestaurantListItem
