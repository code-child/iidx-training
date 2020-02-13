import React, { useState, Component } from 'react';
import IIDXSongs from './IIDX/IIDXSongs';
import logo from './logo.svg';
import './css/App.css';

// function App() {
  const App = props => {
  // class App extends Component {
  // state = {
  //   songs: [
  //     { name: 'mosaic', author: 'Ryu' },
  //     { name: 'Boi', author: 'U*TAKA' },
  //     { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
  //   ]
  // }

  const [songsState, setSongsState] = useState({
    songs: [
    { name: 'mosaic', author: 'Ryu' },
    { name: 'Boi', author: 'U*TAKA' },
    { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
    ]
  })

  const switchSongHandler = () => {
    console.log('Henlo');
    setSongsState({
      songs: [
        { name: 'mosaic', author: 'Ryu' },
        { name: 'Boi', author: 'U*TAKA' },
        { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
      ]
    })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Henlo</h1>
          <h3>Welcome to IIDX Training</h3>
          <button onClick={switchSongHandler}>Switch Song</button>
          <h5>Here are some lists of beginner songs you could practice:</h5>
          <IIDXSongs name={songsState.songs[0].name} author={songsState.songs[0].author} />
          <IIDXSongs name={songsState.songs[1].name} author={songsState.songs[1].author} />
          <IIDXSongs name={songsState.songs[2].name} author={songsState.songs[2].author} />
        </header>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'A text'));
  // }
}

export default App;
