import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {
const {setSlideshowPage} = this.props
    return (
      <div className="nav-container">
        <div className="sort-container">
          <div className="nav-btn nav-string-btn" onClick={setSlideshowPage} data-page={'string'}>String</div>
          <div className="nav-btn nav-array-btn" onClick={setSlideshowPage} data-page={'array'}>Array</div>
          <div className="nav-btn nav-object-btn" onClick={setSlideshowPage} data-page={'object'}>Object</div>
          <div className="nav-btn nav-favorites-btn" onClick={setSlideshowPage} data-page={'favorites'}>Favorites</div>
          <div className="nav-btn nav-fully-btn" onClick={setSlideshowPage} data-page={'fully'}>What I fully understand</div>
        </div>
      </div>
    )
  }
}