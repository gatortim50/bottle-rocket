import React, { Component } from 'react'
import GoogleMap from './GoogleMap'
import RestaurantDetails from './RestaurantDetails'

const HIDE_DRAWER = 'hide'
const SHOW_DRAWER = 'show'

class MapContainer extends Component {
  render() {
    let visibility = this.props.page === 0 ? HIDE_DRAWER : SHOW_DRAWER
    let phoneInformation = ''
    let twitterInformation = ''

    if (!this.props.restaurant) {
      return (
        <div id="flyout-drawer" className={visibility}>
          No restaurant selected!
        </div>
      )
    } else {
      if (this.props.restaurant.contact) {
        phoneInformation = (
          <a href={`tel:+1${this.props.restaurant.contact.phone}`}>
            {this.props.restaurant.contact.formattedPhone}
          </a>
        )
        if (this.props.restaurant.contact.twitter) {
          twitterInformation = (
            <a
              href={`https://twitter.com/${
                this.props.restaurant.contact.twitter
              }`}
            >
              @{this.props.restaurant.contact.twitter}
            </a>
          )
        }
      }

      return (
        <div id="flyout-drawer" className={visibility}>
          <GoogleMap restaurant={this.props.restaurant} />
          <div className="restaurant-details">
            <RestaurantDetails
              name={this.props.restaurant.name}
              category={this.props.restaurant.category}
            />
          </div>
          <div className="location-details">
            <div>{this.props.restaurant.location.formattedAddress[0]}</div>
            <div>{this.props.restaurant.location.formattedAddress[1]}</div>
            <div className="info-spacing">{phoneInformation}</div>
            <div className="info-spacing">{twitterInformation}</div>
          </div>
        </div>
      )
    }
  }
}

export default MapContainer
