import React, { Component } from 'react';
import CardButtons from './CardButtons';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import '../../node_modules/codemirror/theme/neat.css';
import '../../node_modules/codemirror/mode/javascript/javascript';

export default class Card extends Component {

  render() {
    const { currentPage, method, setFavorite, favorites, cardNumber } = this.props;

    return (

      <article id={`card-${cardNumber || 0}`} className="Card" data-card={method.name}>
      <CardButtons setFavorite={setFavorite} name={method.name} favorites={favorites[currentPage] || favorites} currentPage={currentPage}/>
  
        <span className="method-name">{method.name}()</span>
      

        <CodeMirror className="CodeMirror" options={{
          mode: 'javascript',
          theme: 'neat',
          lineNumbers: true,
          readOnly: true,
        }}
          value={method.example} />

          <div className="additional-info-container">

        <p>{method.syntax}</p>
          {
            method.Parameters.map(param => {
            
              return(
                <div>
                  <p>{Object.keys(param)}</p>
                  <p>{Object.values(param)}</p>
                </div>
              )
            })

            }
        </div>
          


      </article>
    )
  }
}