import React, { Component } from 'react';
import view from '../gifs/view.gif'
import viewF from '../gifs/viewF.gif'
import saveF from '../gifs/saveF.gif'

export default class HomePage extends Component {

  render() {

    return (
      <div className="homepage-container">
        <div className="gif-container">
          <div className="gif-title">View Methods</div>
          <div>
            <img className="hopepage-gif" src={view} height="250px" alt="View methods" />
          </div>
        </div>
        <div className="gif-container">
          <div className="gif-title">Save Favorites</div>
          <div>
            <img className="hopepage-gif" src={saveF} height="250px" alt="View methods" />
          </div>
        </div>
        <div className="gif-container">
          <div className="gif-title">View Favorites</div>
          <div>
            <img className="hopepage-gif" src={viewF} height="250px" alt="View methods" />
          </div>
        </div>
      </div>
    )
  }
}