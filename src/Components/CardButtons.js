import React, { Component } from 'react';

export default class CardButtons extends Component {

  render() {
    const { currentPage, setFavorite, favorites, name } = this.props
    const cssClasses = [
      "favorite-btn",
      favorites.includes(name) ? "favorite-selected" : null
    ];

    return (
      <div className="card-btns-container">
        <div className={cssClasses.join(' ')}
          onClick={setFavorite}
          data-type={currentPage}
          data-method={name} >
          <i className="fas fa-star"></i>
        </div>
      </div>
    )
  }
}