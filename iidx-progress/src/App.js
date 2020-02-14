import React, { useState, Component } from 'react';
import IIDXSongs from './IIDX/IIDXSongs';
import logo from './logo.svg';
import './css/App.css';
// React Hook example
// function App() {
  
  class App extends Component {
  state = {
    songs: [
      { name: 'mosaic', author: 'Ryu' },
      { name: 'Boi', author: 'U*TAKA' },
      { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
    ]
  }

  // [songsState, setSongsState] = useState({
  //   songs: [
  //   { name: 'mosaic', author: 'Ryu' },
  //   { name: 'Boi', author: 'U*TAKA' },
  //   { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
  //   ]
  // })

  switchSongHandler = (newSong) => {
    console.log('Henlo');
    this.setState({
      songs: [
        { name: 'mosaic', author: 'Ryu' },
        { name: newSong, author: 'U*TAKA' },
        { name: 'THE BRAVE MUST DIE', author: 'L-E-D.-G'}
      ]
    })
  }
    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Henlo</h1>
          <h3>Welcome to IIDX Training</h3>
          <button onClick={this.switchSongHandler.bind(this, 'Blue Rain')}>Switch Song</button>
          <h5>Here are some lists of beginner songs you could practice:</h5>
          <IIDXSongs name={this.state.songs[0].name} author={this.state.songs[0].author} />
          <IIDXSongs name={this.state.songs[1].name} author={this.state.songs[1].author} click={this.switchSongHandler.bind(this, 'Boboi')} />
          <IIDXSongs name={this.state.songs[2].name} author={this.state.songs[2].author} />
        </header>
      </div>
    );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'A text'));
  }
}

export default App;
