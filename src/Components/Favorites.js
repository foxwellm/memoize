import React, { Component } from 'react';
import FavoritesButton from './FavoritesButton';

export default class Favorites extends Component {

  render() {

    const { favorites, stringMethods, arrayMethods, setFavorite } = this.props;
    // let currentMethods;
    // let {favorites } = this.props;
    let stringFavorites;
    let arrayFavorites;
    // let stringFavoriteCount;
    // let favoriteTracker;
    // if (currentPage === "favorites") {
    stringFavorites = stringMethods.filter(method => {
      // debugger
      return favorites.string.includes(method.name)
    })
    arrayFavorites = stringMethods.filter(method => {
      return favorites.array.includes(method.name)
    })
    // currentMethods = stringFavorites.concat(arrayFavorites)
    //   stringFavoriteCount = currentMethods.length
    // } else {
    //   currentMethods = this.props[`${currentPage}Methods`]
    //   favorites = favorites[`${currentPage}`] || []
    // }
    // debugger
    // this.state[`${currentPage}Methods`]

    return (
      <div className="favorites-container">
        <div className="favorites-btns-container">
          <div>String Methods</div>
          <FavoritesButton />
          <div>Array Methods</div>
          <FavoritesButton />
        </div>
        <div className="favorite-popup-container"></div>
      </div>
    )
  }
}