import React, { Component } from 'react';

export default class FavoritesButton extends Component {

  render() {

    const { methodType, methodName, createPopup } = this.props

    return (
      <div className="favorites-btn-container" onClick={(event) => createPopup(event)} data-type={methodType} data-name={methodName}>
      {methodName}
      </div>
    )
  }
}