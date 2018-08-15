/*Start with a new react app and create a component called color-box. Color-box should not be the parent component.
Color box should be a box, 300px by 300px, with some text in the center of it.
The text should be a word that comes from an array of colors, like this one:*/
import React, { Component } from 'react';

class Box extends Component {



  render() {

    function clickCounter(e) {
      this.setState({count: e.target.value})
      count++
      console.log({this.prop.count})
    }

    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
      let colors = ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"];
/*Create a for loop that takes colors and increments them with onClick*/
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[i]);
      return colors[i]
    }
    }

    return (
        <div className='displayBox' onClick={handleClick,clickCounter}>
        <p>This is the text</p>
        </div>


    );
  }
}

export default Box;



/* Every time you click on the box, the box text should change to be the next value in the array.
The initial text in the box (that shows before you click anything) should be the first value in the array.*/
