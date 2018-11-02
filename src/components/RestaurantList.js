import React from 'react'
import RestaurantListItem from './RestaurantListItem'

const RestaurantList = ({ handleClick, restaurants }) => {
  const restaurantItem = restaurants.map(restaurant => {
    const keyName = restaurant.name + restaurant.category
    return (
      <RestaurantListItem
        handleClick={handleClick}
        restaurant={restaurant}
        key={keyName}
      />
    )
  })

  return (
    <div className="scroll-div">
      <ul className="restaurant-ul">{restaurantItem}</ul>
    </div>
  )
}

export default RestaurantList
