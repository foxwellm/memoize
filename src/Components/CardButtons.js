import React, { Component } from 'react';

export default class CardButtons extends Component {

  constructor() {
    super();
 
  }


  render() {

    const {currentPage, setFavorite, favorites, name} = this.props

    const cssClasses = [
      "favorite-btn",
      favorites.includes(name) ? "favorite-selected" : null
    ];


    return (
      <div className="card-btns-container">
        <div className={cssClasses.join(' ')} onClick={setFavorite} data-type={currentPage} data-method={name} ><i class="fas fa-star"></i></div>
        <div className="fully-btn">I fully understand this</div>
        <div className="delete-btn"><i className="fas fa-times-circle"></i></div>
      </div>
    )
  }
}