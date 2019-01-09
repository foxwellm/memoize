import React, { Component } from 'react';
import Card from './Card';
import { uid } from 'react-uid';

export default class Slideshow extends Component {

  render() {
    const { currentPage, setFavorite, currentIndex, nextMethod, prevMethod, currentMethods, favorites } = this.props;

    return (
      <div className="Slideshow">
        <div className={`cards-slider active-slide-${currentIndex}`}>
          {currentIndex !== 0 &&
            <div
              className="prev-btn"
              onClick={prevMethod}>
              <i className="fas fa-arrow-circle-left"></i></div>
          }
          <div className="cards-slider-wrapper" style={{
            'transform': `translateX(-${currentIndex * (100 / currentMethods.length)}%)`
          }}>
            {
              currentMethods.map((method, i) =>
                <Card method={method}
                  key={uid}
                  setFavorite={setFavorite}
                  favorites={favorites}
                  currentPage={currentPage}
                  cardNumber={i} />
              )
            }
          </div>
          {currentIndex !== currentMethods.length - 1 &&
            <div
              className="next-btn"
              onClick={() => nextMethod(currentMethods)}>
              <i className="fas fa-arrow-circle-right"></i>
            </div>
          }
        </div>
      </div>
    )
  }
}