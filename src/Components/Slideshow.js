import React, { Component } from 'react';
import Card from './Card';

export default class Slideshow extends Component {

  render() {
    const { currentPage, currentMethods, setFavorite, favorites, currentIndex, nextMethod, prevMethod } = this.props;
    return (
      <div>
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
              currentMethods.map((method, i) => <Card method={method} key={method.index} setFavorite={setFavorite} favorites={favorites} currentPage={currentPage} />)
            }
          </div>
          {currentIndex !== currentMethods.length - 1 &&
            <div
              className="next-btn"
              onClick={() => nextMethod(currentMethods)}

            ><i className="fas fa-arrow-circle-right"></i></div>
          }
        </div>
      </div>
    )
  }
}