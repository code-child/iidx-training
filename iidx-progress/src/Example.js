import React, { useState, Component } from 'react';
import IIDXSongs from './IIDX/IIDXSongs';
import logo from './logo.svg';
import './css/App.css';

function Example() {

  // const [songs] = useState([
  //   { name: 'mosaic', author: 'Ryu' },
  //   { name: 'Boi', author: 'U*TAKA' },
  //   { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
  // ])
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Henlo</h1>
          <h3>Welcome to IIDX Training</h3>
          <h5>Here are some lists of beginner songs you could practice:</h5>
        </header>
      </div>
    );
    
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'A text'));

}

export default Example;
