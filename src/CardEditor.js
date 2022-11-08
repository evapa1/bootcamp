import React from 'react';
import './CardEditor.css';

class CardEditor extends React.Component{
  //component keeping own state
  // render in a table
  //mpa function with any array, can map over that array of objects
  // takesevery element in cards array and map it to jsx element
  constuctor(props) {
    super(props);
    this.state = {front: '', back: ''};
   }
   
   handleFrontChange = event => {
    console.log(event.target.value);
    this.setState({ front: event.target.value });
   }
  
   handleBackChange = event => {
    console.log(event.target.value);
    this.setState({ back: event.target.value });
   }
   
  render() {
    const cards = this.props.cards.map((card, index) => {
      //takes in current card and return elements want card to become
       //iterating over each card and mapping it to a fake row
      return {
         <tr key=index>
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
         <br/>
         <input 
          onChange={this.handleFrontChange} 
          placeholder="Front of card" 
          value={this.state.front} 
         />
        
         <input 
          onChange={this.handleBackChange}
          placeholder="Back of card" 
          value={this.state.back} 
         />
         <button>Add card</button>
      </div>
     );
  };
}

export default CardEdtitor;
    
