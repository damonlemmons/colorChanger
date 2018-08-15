/*Start with a new react app and create a component called color-box. Color-box should not be the parent component.
Color box should be a box, 300px by 300px, with some text in the center of it.
The text should be a word that comes from an array of colors, like this one:*/
import React, { Component } from 'react';
import './App.css'

class Box extends Component {
  constructor(props){
    super(props)
      this.state = {
        colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"],
        count: 0,

    }
}


handleChange = (e) => {
  //assign the state of count to a variable
  let newCount = this.state.count;
    console.log(newCount);
    //if statement to reset to counter after one cycle
    if (newCount < 8) {
      newCount++
    } else {
        newCount = 0
      }
//setting state of count to our newCount
  this.setState({count: newCount })
  //assigning this.state.colors to a variable called newColors
  let newColors = this.state.colors
        console.log(newColors[newCount])
//setting state of colors to newColors
    this.setState({colors:newColors})

}

  render() {
    //putting the state of count as the index of the colors array that is also in state
    let indColor = this.state.colors[this.state.count]

    return (
        <div className='displayBox' style={{backgroundColor: indColor}} onClick={this.handleChange}>
        <p>{indColor}</p>
        </div>

    );
  }
}

export default Box;



/* Every time you click on the box, the box text should change to be the next value in the array.
The initial text in the box (that shows before you click anything) should be the first value in the array.*/
