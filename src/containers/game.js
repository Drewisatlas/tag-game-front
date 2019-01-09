import React from 'react';

import Player from '../components/playerPiece'

class Game extends React.Component {

  render () {
     return (
       <div>
       This is the game container, it will render the board, the players, the scoreboard
       and the player lives.
       <Player />
       <Player />
       <Player />
       <Player />
       </div>
     )
  }
}

export default Game
