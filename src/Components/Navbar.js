import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
const {setSlideshowPage} = this.props

    return (
      <div className="nav-container">
        <div className="sort-container">
          <div className='nav-btn' onClick={setSlideshowPage} data-page={'homepage'} >MEMOIZE</div>
          <div className="nav-btn nav-string-btn" onClick={setSlideshowPage} data-page={'string'}>String</div>
          <div className="nav-btn nav-array-btn" onClick={setSlideshowPage} data-page={'array'}>Array</div>
          <div className="nav-btn nav-favorites-btn" onClick={setSlideshowPage} data-page={'favorites'}>Favorites</div>
        </div>
      </div>
    )
  }
}