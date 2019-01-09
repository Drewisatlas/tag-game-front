import React from 'react';

import Player from '../components/playerPiece'
import Board from '../components/board'

class Game extends React.Component {

  render () {
     return (
       <React.Fragment>
       <div>This is the game container, it will render the board, the players, the scoreboard
       and the player lives.</div>
       <div className='gameContainer'>
       <div />
       <Board />
       </div>
       </ React.Fragment>
     )
  }
}

export default Game
