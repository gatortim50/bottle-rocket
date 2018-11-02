import React from 'react'

import backButton from '../assets/ic_webBack@2x.png'
import map from '../assets/icon_map@2x.png'

const middleText = 'Lunch Tyme'

const Header = ({ onBackClick, onMapClick, page }) => {
  let backIcon = <div />

  /*  page 0 = scroll view
        page 1 = google maps open 
    */

  if (page !== 0) {
    backIcon = (
      <img
        onClick={onBackClick}
        className="icon-images"
        id="header-back-icon"
        src={backButton}
        alt="back"
      />
    )
  }

  return (
    <header className="frame">
      <div className="header-container" id="header-left">
        {backIcon}
      </div>
      <div className="header-container" id="header-middle">
        <div id="header-middle-text">{middleText}</div>
      </div>
      <div className="header-container" id="header-right">
        <img
          onClick={onMapClick}
          className="icon-images"
          id="header-map-icon"
          src={map}
          alt="map"
        />
      </div>
    </header>
  )
}

export default Header
