import React, { Component } from 'react';
import '../styles/Main.scss';
import HomePage from './HomePage';
import Favorites from './Favorites';
import Slideshow from './Slideshow';
import Navbar from './Navbar';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentPage: 'string',
      stringMethods: null,
      arrayMethods: null,
      errors: null,
      favorites: JSON.parse(localStorage.getItem('favorites') || "{}"),
      currentIndex: 0
    }
  }

  getData = (request) => {
    const url = 'http://memoize-datasets.herokuapp.com/api/v1/';
    fetch(`${url + request}`)
      .then(data => data.json())
      .then(result => this.setState({
        [request]: result[request]
      }))
      .catch(errors => {
        this.setState({
          errors
        })
      })
  }

  componentDidMount() {
    this.getData('stringMethods');
    this.getData('arrayMethods');
  }

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

  nextMethod = () => {
    const currentIndex = this.state.currentIndex + 1;
    this.setState({
      currentIndex
    })
  }

  prevMethod = () => {
    const currentIndex = this.state.currentIndex - 1;
    this.setState({
      currentIndex
    })
  }

  render() {
    const { currentPage, favorites, currentIndex, stringMethods, arrayMethods, errors } = this.state;

    if (stringMethods && arrayMethods && !errors) {
      return (
        <div className="App">
          <Navbar setSlideshowPage={this.setSlideshowPage}
            currentPage={currentPage}
            favorites={favorites} />
          {
            currentPage === 'homepage' ?
              <HomePage />
              : currentPage === 'favorites' ?
                <Favorites
                  favorites={favorites}
                  stringMethods={stringMethods}
                  arrayMethods={arrayMethods}
                  setFavorite={this.setFavorite} />
                : <Slideshow
                  currentMethods={this.state[`${currentPage}Methods`]}
                  favorites={favorites[`${currentPage}`] || []}
                  setFavorite={this.setFavorite}
                  currentPage={currentPage}
                  currentIndex={currentIndex}
                  nextMethod={this.nextMethod}
                  prevMethod={this.prevMethod} />
          }
        </div>
      )
    } else if (errors) {
      return (<span>Something went wrong</span>)
    } else {
      return (<div>...Loading...</div>)
    }
  }
}