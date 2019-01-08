import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      currentActivePage: 'string'
    }
  }

  changePage = (event) => {
    this.setActive(event)
    this.props.setSlideshowPage(event)
  }

  setActive = (event) => {
    let currentActivePage = event.target.dataset.page
    this.setState({
      currentActivePage
    })
  }

  btnClasses(btn) {
    const cssClasses = [
      "nav-btn",
      this.state.currentActivePage === btn ? "active-btn" : null
    ].join(' ')
    return cssClasses
  }


  render() {
    const { favorites } = this.props
    let currentFavoriteCount = 0;
    Object.keys(favorites).forEach(key => {
      currentFavoriteCount += favorites[key].length
    })

    return (
      <div className="nav-container">
        <div className={this.btnClasses('homepage')} onClick={this.changePage} data-page={'homepage'} >MEMOIZE</div>
        <div className={this.btnClasses('string')} onClick={this.changePage} data-page={'string'}>String</div>
        <div className={this.btnClasses('array')} onClick={this.changePage} data-page={'array'}>Array</div>
        <div className={this.btnClasses('favorites')} onClick={this.changePage} data-page={'favorites'}>Favorites ({currentFavoriteCount})</div>
      </div>
    )
  }
}