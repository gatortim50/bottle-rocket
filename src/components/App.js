import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from './Header'
import MapContainer from './MapContainer'
import RestaurantList from './RestaurantList'
import { getRestaurantList } from '../actions/storeActions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: 0,
      selected: '',
      restaurants: [],
    }
  }

  componentDidMount() {
    // redux
    this.props.getRestaurantList()
    const { restaurants } = this.props
    this.setState({
      selected: restaurants[0],
    })
  }

  handleBackButton = () => {
    const pNum = this.state.page === 1 ? 0 : 1
    this.setState({
      page: pNum,
    })
  }

  handleMapButton = () => {
    this.setState({ page: 1 })
  }

  handleClick = e => {
    this.setState({
      page: e.page,
      selected: e.selected,
    })
  }

  render() {
    const { restaurants } = this.props

    return (
      <div className="App">
        <Header
          onBackClick={this.handleBackButton}
          onMapClick={this.handleMapButton}
          page={this.state.page}
        />

        <MapContainer restaurant={this.state.selected} page={this.state.page} />

        <div className="main-body-frame">
          <RestaurantList
            handleClick={selectedRestaurant =>
              this.setState({ page: 1, selected: selectedRestaurant })
            }
            restaurants={restaurants}
          />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  getRestaurantList: PropTypes.func.isRequired,
  restaurants: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  restaurants: state.restaurants.shops,
  error: state.restaurants.error,
})

export default connect(
  mapStateToProps,
  { getRestaurantList }
)(App)
