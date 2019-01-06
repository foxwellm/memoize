import React, { Component } from 'react';
import CardButtons from './CardButtons';
// import { uid } from 'react-uid';


import CodeMirror from '../../node_modules/react-codemirror/lib/Codemirror';

import example from '../util/example';
import '../../node_modules/codemirror/theme/ambiance.css';
import '../../node_modules/codemirror/mode/javascript/javascript';

export default class Card extends Component {

constructor() {
  super();

}


  render() {
    const { currentPage, method, setFavorite, favorites } = this.props;
    return (

      <article id={`card-${method.index}`} className="Card" data-card={method.name}>
      <CardButtons setFavorite={setFavorite} name={method.name} favorites={favorites} currentPage={currentPage}/>
  
        <p>{method.name}</p>
      

        <CodeMirror options={{
          mode: 'javascript',
          theme: 'ambiance',
          lineNumbers: true,
          readOnly: true
        }}
          value={example} />



      </article>
    )
  }
}