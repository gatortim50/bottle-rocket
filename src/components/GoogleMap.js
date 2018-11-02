import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

class GoogleMap extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '180px',
    }

    if (
      !this.props.restaurant.location.lat ||
      !this.props.restaurant.location.lng
    ) {
      return <div>Loading...</div>
    }

    return (
      <div className="map-container">
        <Map
          style={mapStyles}
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: this.props.restaurant.location.lat,
            lng: this.props.restaurant.location.lng,
          }}
          center={{
            lat: this.props.restaurant.location.lat,
            lng: this.props.restaurant.location.lng,
          }}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={this.props.restaurant.name}
            position={{
              lat: this.props.restaurant.location.lat,
              lng: this.props.restaurant.location.lng,
            }}
          />
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD2OmzAIGQaGbNTD0GOEyeqU4lE3K7HKas',
})(GoogleMap)
