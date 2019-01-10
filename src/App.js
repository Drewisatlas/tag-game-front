import React, { Component } from 'react';
import Game from './containers/game'


class App extends Component {
  render() {
    return (
      <div>
      <h1> Let's Play Tag </h1>
      <Game />
      </div>
    );
  }
}

export default App;
