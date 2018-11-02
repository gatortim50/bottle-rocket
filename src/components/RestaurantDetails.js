import React from 'react'

const RestaurantDetails = ({ name, category }) => {
  return (
    <div>
      <div id="restaurant-list-name">{name}</div>
      <div id="restaurant-list-category">{category}</div>
    </div>
  )
}

export default RestaurantDetails
