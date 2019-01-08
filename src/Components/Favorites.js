import React, { Component } from 'react';
import FavoritesButton from './FavoritesButton';
import Card from './Card';

export default class Favorites extends Component {

  constructor() {
    super()
    this.state = {
      popupType: null,
      popupMethod: null
    }
  }

  createPopup = (event) => {
    const popupType = event.target.dataset.type
    const popupName = event.target.dataset.name
    const popupMethod = this.props[`${popupType}Methods`].find(method => {
      return method.name === popupName
    })

    this.setState({
      popupType,
      popupMethod
    })
  }

  closePopup() {
    this.setState({
      popupMethod: null
    })
  }

  render() {
    const { popupType, popupMethod } = this.state;
    const { favorites, stringMethods, arrayMethods, setFavorite } = this.props;

    let stringFavorites = stringMethods.filter(method => {
      return favorites.string.includes(method.name)
    })
    let arrayFavorites = arrayMethods.filter(method => {
      return favorites.array.includes(method.name)
    })

    return (
      <div className="favorites-container">
        <div className="favorites-btns-container">
          <div className="favorite-title">String Methods</div>
          {
            stringFavorites.length === 0 ?
              <div className="favorite-none">No String Favorites Yet</div>
              : stringFavorites.map(method => {
                return <FavoritesButton methodType={'string'} methodName={method.name} createPopup={this.createPopup} />
              })
          }

          <div className="favorite-title">Array Methods</div>
          {
            arrayFavorites.length === 0 ?
              <div className="favorite-none">No Array Favorites Yet</div>
              : arrayFavorites.map(method => {
                return <FavoritesButton methodType={'array'} methodName={method.name} createPopup={this.createPopup} />
              })
          }
        </div>
        <div className="favorite-popup-container">
          {
            popupMethod ? <Card method={popupMethod} setFavorite={setFavorite}
              favorites={favorites} currentPage={popupType} /> : null
          }
        </div>
      </div>
    )
  }
}