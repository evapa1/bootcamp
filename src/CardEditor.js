import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component{
  //component keeping own state
  // render in a table
  //mpa function with any array, can map over that array of objects
  // takesevery element in cards array and map it to jsx element
  render() {
    const cards = this.props.cards.map() => {
      //takes in current card and return elements want card to become
       //iterating over each card and mapping it to a fake row
      return {
         <tr>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td>
              <button>Delete card</button>
            </td>
          </tr>
        };
    });
    
    return(
      <div>
        <h2>Card Editor</h2>
        <table>
          <thead>
            <tr>
              <th>Front</th>
              <th>Back</th>
              <th>Delete</th>
            </tr>
          </thead> 
          <tbody>{cards}</tbody>
         </table>
      </div>
     );
  };
}

export default CardEdtitor;
    
