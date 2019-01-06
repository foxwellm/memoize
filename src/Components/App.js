import React, { Component } from 'react';
import '../styles/Main.scss';
import Slideshow from './Slideshow';
import Navbar from './Navbar';
import Data from '../Data/index.js'


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 'homepage',
      stringMethods: Data.stringMethods,
      arrayMethods: Data.arrayMethods,
      objectMethods: Data.objectMethods,
      errors: null,
      favorites: JSON.parse(localStorage.getItem('favorites') || "{}"),
      currentIndex: 0

      // fully: JSON.parse(localStorage.getItem('fully') || "[]")
    }
  }

  // componentDidMount() {
  //   fetch("../Data/index.js")
  //     .then(data => data.json())
  //     .then(result => console.log(result.arrayMethods))
  // }

  setFavorite = (event) => {
    let currentFavorites = { ...this.state.favorites };
    const currentPage = event.target.parentElement.dataset.type
    const currentMethod = event.target.parentElement.dataset.method
   

    if (currentFavorites[currentPage]) {
      if (currentFavorites[currentPage].includes(currentMethod)) {
        var index = currentFavorites[currentPage].indexOf(currentMethod);
        currentFavorites[currentPage].splice(index, 1);
      } else {
  
        currentFavorites[currentPage].push(currentMethod);
        currentFavorites[currentPage].sort();
      }
    } else {
      currentFavorites[currentPage] = [currentMethod]
    }
    // debugger
    // const cardSelected = event.target.closest('article').dataset.card
    // if (currentFavorites.includes(cardSelected)) {
    //   var index = currentFavorites.indexOf(cardSelected);
    //   currentFavorites.splice(index, 1);
    // } else {
    //   currentFavorites.push(cardSelected);
    //   currentFavorites.sort();
    // }
    this.setState({
      favorites: currentFavorites
    })
    localStorage.setItem('favorites', JSON.stringify(currentFavorites));
  }

  setSlideshowPage = (event) => {
    const currentPage = event.target.dataset.page
    this.setState({
      currentPage,
      currentIndex: 0
    })
  }

  nextProperty = () => {
    const newIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex: newIndex
    })
  }

  prevProperty = () => {
    const newIndex = this.state.currentIndex - 1;
    this.setState({
      currentIndex: newIndex
    })
  }

  render() {
    const { currentPage, favorites, fully, currentIndex } = this.state;
    // debugger
    // const currentMethods = this.state[`${currentPage}Methods`];
    // debugger
    return (
      <div className="App">
        <Navbar setSlideshowPage={this.setSlideshowPage} />
        {currentPage === 'homepage' ?
          <div></div> :
          <Slideshow currentMethods={this.state[`${currentPage}Methods`]}
            // stringMethods={stringMethods}
            favorites={favorites[`${currentPage}`] || []}
            fully={fully}
            setFavorite={this.setFavorite}
            currentPage={currentPage}
            currentIndex={currentIndex}
            nextProperty={this.nextProperty}
            prevProperty={this.prevProperty} />
        }
      </div>
    );
  }
}