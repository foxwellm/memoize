import React, { Component } from 'react';
import Card from './Card';
// import { uid } from 'react-uid';



export default class Slideshow extends Component {
  constructor() {
    super();

  }


  render() {
    // debugger
    // const { currentIndex } = this.state;
    const { currentPage, currentMethods, setFavorite, favorites, currentIndex, nextProperty, prevProperty } = this.props;

      return (
        <div>
          <button
            onClick={nextProperty}
            disabled={currentIndex === currentMethods.length - 1}
          >Next</button>
          <button
            onClick={prevProperty}
            disabled={currentIndex === 0}
          >Prev</button>
          <div className={`cards-slider active-slide-${currentIndex}`}>
            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${currentIndex * (100 / currentMethods.length)}%)`
            }}>
              {
                currentMethods.map((method, i) => <Card method={method} index={i} setFavorite={setFavorite} favorites={favorites} currentPage={currentPage}/>)
              }
            </div>
          </div>
        </div>
      )
 
    
  }
}